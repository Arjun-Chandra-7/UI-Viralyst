import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { planId, amount, userId, userEmail, phone } = req.body || {};

    if (!planId || !amount) {
      return res.status(400).json({ error: 'planId and amount are required' });
    }

    // PhonePe Credentials (Production or Sandbox UAT default)
    const isProd = process.env.PHONEPE_ENV === 'PRODUCTION';
    const merchantId = process.env.PHONEPE_MERCHANT_ID || 'PGTESTPAYUAT';
    const saltKey = process.env.PHONEPE_SALT_KEY || '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const saltIndex = process.env.PHONEPE_SALT_INDEX || '1';

    const baseUrl = isProd 
      ? 'https://api.phonepe.com/apis/hermes' 
      : 'https://api-preprod.phonepe.com/apis/pg-sandbox';

    // PhonePe expects amount in PAISE (₹1.50 = 150 paise, ₹5.00 = 500 paise, ₹20.00 = 2000 paise)
    const amountInPaise = Math.round(Number(amount) * 100);
    const txnId = 'VL_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);

    const protocol = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['host'] || 'viralyst-phi.vercel.app';
    const callbackUrl = `${protocol}://${host}/api/phonepe/callback`;
    const redirectUrl = `${protocol}://${host}/api/phonepe/callback?planId=${planId}&txnId=${txnId}`;

    const paymentPayload = {
      merchantId: merchantId,
      merchantTransactionId: txnId,
      merchantUserId: userId || 'USER_' + Date.now(),
      amount: amountInPaise,
      redirectUrl: redirectUrl,
      redirectMode: 'POST',
      callbackUrl: callbackUrl,
      mobileNumber: phone || '9999999999',
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };

    const base64Payload = Buffer.from(JSON.stringify(paymentPayload)).toString('base64');
    const stringToHash = base64Payload + '/pg/v1/pay' + saltKey;
    const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const xVerifyHeader = `${sha256}###${saltIndex}`;

    const response = await fetch(`${baseUrl}/pg/v1/pay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerifyHeader
      },
      body: JSON.stringify({ request: base64Payload })
    });

    const data = await response.json();

    if (data && data.success && data.data && data.data.instrumentResponse) {
      const payUrl = data.data.instrumentResponse.redirectInfo.url;
      return res.status(200).json({
        success: true,
        redirectUrl: payUrl,
        transactionId: txnId,
        amount: amount,
        isSandbox: !isProd
      });
    } else {
      console.error('PhonePe API Error:', data);
      return res.status(500).json({
        success: false,
        error: data.message || 'PhonePe order creation failed',
        details: data
      });
    }
  } catch (err) {
    console.error('PhonePe Server Error:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
