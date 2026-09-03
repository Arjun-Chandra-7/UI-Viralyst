import crypto from 'crypto';

export default async function handler(req, res) {
  try {
    const isProd = process.env.PHONEPE_ENV === 'PRODUCTION';
    const merchantId = process.env.PHONEPE_MERCHANT_ID || 'PGTESTPAYUAT';
    const saltKey = process.env.PHONEPE_SALT_KEY || '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const saltIndex = process.env.PHONEPE_SALT_INDEX || '1';

    const baseUrl = isProd 
      ? 'https://api.phonepe.com/apis/hermes' 
      : 'https://api-preprod.phonepe.com/apis/pg-sandbox';

    // Parse incoming transaction ID
    const url = new URL(req.url, `http://${req.headers.host}`);
    const txnIdFromQuery = url.searchParams.get('txnId');
    const planIdFromQuery = url.searchParams.get('planId') || 'plus';

    let txnId = txnIdFromQuery;

    // Check payload if POST
    if (req.method === 'POST' && req.body && req.body.response) {
      try {
        const decoded = JSON.parse(Buffer.from(req.body.response, 'base64').toString('utf-8'));
        if (decoded && decoded.data && decoded.data.merchantTransactionId) {
          txnId = decoded.data.merchantTransactionId;
        }
      } catch (e) {
        console.warn('Could not parse PhonePe response body:', e);
      }
    }

    if (!txnId) {
      return res.redirect(302, '/?payment=error&reason=missing_txn_id');
    }

    // Verify transaction status directly with PhonePe Server
    const stringToHash = `/pg/v1/status/${merchantId}/${txnId}` + saltKey;
    const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const xVerifyHeader = `${sha256}###${saltIndex}`;

    const statusResponse = await fetch(`${baseUrl}/pg/v1/status/${merchantId}/${txnId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerifyHeader,
        'X-MERCHANT-ID': merchantId
      }
    });

    const statusData = await statusResponse.json();
    console.log('PhonePe Verification Status Response:', statusData);

    const isSuccess = statusData && (statusData.code === 'PAYMENT_SUCCESS' || statusData.success === true);

    if (isSuccess) {
      // Redirect to Setup screen with success confirmation
      return res.redirect(302, `/setup.html?payment=success&txnId=${encodeURIComponent(txnId)}&plan=${encodeURIComponent(planIdFromQuery)}`);
    } else {
      const reason = statusData ? (statusData.message || statusData.code) : 'failed';
      return res.redirect(302, `/#plans?payment=failed&reason=${encodeURIComponent(reason)}`);
    }
  } catch (err) {
    console.error('PhonePe Callback Exception:', err);
    return res.redirect(302, '/#plans?payment=error');
  }
}
