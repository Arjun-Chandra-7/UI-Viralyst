/**
 * Viralyst Authentication, Plans, & PhonePe Payment Flow
 * Consistent with Viralyst / Aardvark Design System
 * Currency: Strictly Indian Rupees (₹ / Rs.)
 */

(function () {
  'use strict';

  // State
  let currentUser = JSON.parse(localStorage.getItem('viralyst_user') || 'null');
  let currentSubscription = JSON.parse(localStorage.getItem('viralyst_subscription') || 'null');
  let selectedPlan = null;
  let qrInterval = null;

  // Plan catalog (Strictly Rupees ₹)
  const PLANS = {
    free: {
      id: 'free',
      name: 'Free Explorer',
      price: 0,
      priceFormatted: '₹0',
      period: '/ forever',
      reelsPerMonth: 3,
      badge: 'FREE EXPLORER',
      features: ['3 Reels analysis / month', 'Spoken hook syntax breakdown', 'Standard format patterns', 'Community blueprints']
    },
    go: {
      id: 'go',
      name: 'Go',
      price: 1.50,
      priceFormatted: '₹1.50',
      period: '/ month',
      reelsPerMonth: 10,
      badge: 'GO TIER',
      features: ['10 reels a month', 'Professional dashboard', 'Spoken & audio cadence sync', 'Exportable shoot briefs']
    },
    plus: {
      id: 'plus',
      name: 'Plus',
      price: 5.00,
      priceFormatted: '₹5.00',
      period: '/ month',
      reelsPerMonth: 40,
      badge: '★ MOST POPULAR',
      features: ['40 reels a month', 'Professional dashboard', 'Multi-track V-Lens decomposition', 'Acoustic cadence & micro-cut timing', 'Custom brand profile learning']
    },
    pro: {
      id: 'pro',
      name: 'Pro',
      price: 20.00,
      priceFormatted: '₹20.00',
      period: '/ month',
      reelsPerMonth: 60,
      badge: 'PRO MULTI-ACCOUNT',
      features: ['Manage up to 3 accounts', '60 reels a month', 'Professional dashboard per account', 'Dedicated autonomous Manager', 'Priority format engineering']
    }
  };

  // Build and inject modal markup
  function injectModals() {
    if (document.getElementById('viralyst-app-modals')) return;

    const modalWrapper = document.createElement('div');
    modalWrapper.id = 'viralyst-app-modals';
    modalWrapper.innerHTML = `
      <!-- 1. Google Auth Modal -->
      <div id="v-auth-modal" class="v-modal-overlay">
        <div class="v-modal-container">
          <button type="button" class="v-modal-close" data-close-modal="" aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div class="v-auth-header">
            <span class="v-auth-badge">[AUTHENTICATION GATEWAY]</span>
            <h2 class="v-auth-title">Verify your account</h2>
            <p class="v-auth-desc">Sign in with Google to access short-form content intelligence and custom brand blueprints.</p>
          </div>

          <div class="v-auth-body">
            <button type="button" id="v-google-signin-btn" class="v-google-btn">
              <svg class="v-google-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <!-- Google Account Picker Simulation -->
            <div id="v-account-picker" class="v-account-picker" style="display: none;">
              <div class="v-account-picker-header">Choose an account to continue to Viralyst</div>
              <div class="v-account-option" data-select-account="arjun">
                <div class="v-account-avatar">A</div>
                <div class="v-account-details">
                  <div class="v-account-name">Arjun Chandra</div>
                  <div class="v-account-email">arjun.chandra@gmail.com</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              </div>

              <div style="margin-top: 1em; padding-top: 0.8em; border-top: 1px solid #ECECEC;">
                <div style="font-family: var(--font-mono); font-size: 10px; color: #666; margin-bottom: 6px;">Or use another Google account:</div>
                <form id="v-custom-account-form" class="v-account-custom-input">
                  <input type="email" id="v-custom-email" placeholder="Enter your google email" required />
                  <button type="submit">Verify</button>
                </form>
              </div>
            </div>

            <div id="v-auth-status" style="margin-top: 1.2em; text-align: center; font-family: var(--font-mono); font-size: 11px; color: #666; display: none;">
              Verifying Google OAuth Token...
            </div>
          </div>
        </div>
      </div>

      <!-- 2. Plans & Pricing Modal (Rs / ₹) -->
      <div id="v-plan-modal" class="v-modal-overlay">
        <div class="v-modal-container v-modal-container--wide">
          <button type="button" class="v-modal-close" data-close-modal="" aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div class="v-plan-header">
            <div id="v-plan-user-chip" class="v-user-chip">
              <span class="v-user-chip-avatar">A</span>
              <span id="v-plan-user-name">Arjun Chandra</span>
              <span style="color: #10B981;">&bull; Verified</span>
            </div>
            <h2 class="v-auth-title">Select your intelligence plan</h2>
            <p class="v-auth-desc">Choose an operating tier for your brand or start exploring for free.</p>
          </div>

          <div class="v-plans-grid">
            <!-- Free Card -->
            <div class="v-plan-card v-plan-card--free">
              <div>
                <span class="v-plan-badge" style="background: rgba(197, 188, 255, 0.3); color: #32225F;">[FREE PLAN]</span>
                <h3 class="v-plan-title">Free Explorer</h3>
                <div class="v-plan-price">₹0 <span>/ forever</span></div>
                <ul class="v-plan-features">
                  <li><span class="v-plan-check">&check;</span> 3 Reels analysis / month</li>
                  <li><span class="v-plan-check">&check;</span> Spoken hook syntax breakdown</li>
                  <li><span class="v-plan-check">&check;</span> Standard format patterns</li>
                  <li><span class="v-plan-check">&check;</span> Community blueprints</li>
                </ul>
              </div>
              <button type="button" class="v-plan-action-btn v-plan-action-btn--free" data-choose-plan="free">
                Continue with Free &rarr;
              </button>
            </div>

            <!-- Go Card -->
            <div class="v-plan-card v-plan-card--go">
              <div>
                <span class="v-plan-badge" style="background: rgba(255, 81, 70, 0.15); color: #FF5146;">[GO TIER]</span>
                <h3 class="v-plan-title">Go</h3>
                <div class="v-plan-price">₹1.50 <span>/ month</span></div>
                <ul class="v-plan-features">
                  <li><span class="v-plan-check">&check;</span> <strong>10 reels a month</strong></li>
                  <li><span class="v-plan-check">&check;</span> <strong>Professional dashboard</strong></li>
                  <li><span class="v-plan-check">&check;</span> Spoken & audio cadence sync</li>
                  <li><span class="v-plan-check">&check;</span> Exportable shoot briefs</li>
                </ul>
              </div>
              <button type="button" class="v-plan-action-btn v-plan-action-btn--go" data-choose-plan="go">
                Select Go (₹1.50) &rarr;
              </button>
            </div>

            <!-- Plus Card -->
            <div class="v-plan-card v-plan-card--plus">
              <div>
                <span class="v-plan-badge v-plan-badge--popular">★ MOST POPULAR</span>
                <h3 class="v-plan-title">Plus</h3>
                <div class="v-plan-price">₹5.00 <span>/ month</span></div>
                <ul class="v-plan-features">
                  <li><span class="v-plan-check">&check;</span> <strong>40 reels a month</strong></li>
                  <li><span class="v-plan-check">&check;</span> <strong>Professional dashboard</strong></li>
                  <li><span class="v-plan-check">&check;</span> Multi-track V-Lens decomposition</li>
                  <li><span class="v-plan-check">&check;</span> Acoustic cadence & micro-cut timing</li>
                  <li><span class="v-plan-check">&check;</span> Custom brand profile learning</li>
                </ul>
              </div>
              <button type="button" class="v-plan-action-btn v-plan-action-btn--plus" data-choose-plan="plus">
                Select Plus (₹5.00) &rarr;
              </button>
            </div>

            <!-- Pro Card -->
            <div class="v-plan-card v-plan-card--pro">
              <div>
                <span class="v-plan-badge" style="background: rgba(49, 92, 255, 0.25); color: #C5BCFF;">[MULTI-ACCOUNT]</span>
                <h3 class="v-plan-title" style="color: #FFFFFF;">Pro</h3>
                <div class="v-plan-price" style="color: #FFFFFF;">₹20.00 <span>/ month</span></div>
                <ul class="v-plan-features" style="color: rgba(255,255,255,0.85);">
                  <li><span class="v-plan-check">&check;</span> <strong>Manage up to 3 accounts</strong></li>
                  <li><span class="v-plan-check">&check;</span> <strong>60 reels a month</strong></li>
                  <li><span class="v-plan-check">&check;</span> <strong>Professional dashboard per account</strong></li>
                  <li><span class="v-plan-check">&check;</span> Dedicated autonomous Manager</li>
                  <li><span class="v-plan-check">&check;</span> Priority custom format engineering</li>
                </ul>
              </div>
              <button type="button" class="v-plan-action-btn v-plan-action-btn--pro" data-choose-plan="pro">
                Select Pro (₹20.00) &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. PhonePe Payment Gateway Modal (Rs / ₹) -->
      <div id="v-phonepe-modal" class="v-modal-overlay">
        <div class="v-modal-container phonepe-modal">
          <button type="button" class="v-modal-close" style="color: #FFF;" data-close-modal="" aria-label="Close modal">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div class="phonepe-header">
            <div class="phonepe-brand">
              <div class="phonepe-logo-icon">पे</div>
              <div class="phonepe-brand-text">
                <h4>PhonePe</h4>
                <p>SECURE PAYMENT GATEWAY</p>
              </div>
            </div>
            <span style="font-family: var(--font-mono); font-size: 10px; background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 20px;">256-BIT ENCRYPTION</span>
          </div>

          <div class="phonepe-body">
            <div class="phonepe-order-card">
              <div class="phonepe-order-row">
                <span style="color: #6C757D;">Merchant</span>
                <span style="font-weight: 700; color: #0B0B0F;">VIRALYST INTEL</span>
              </div>
              <div class="phonepe-order-row">
                <span style="color: #6C757D;">Subscription Tier</span>
                <span id="phonepe-plan-name" style="font-weight: 700; color: #5F259F;">Plus Plan</span>
              </div>
              <div class="phonepe-order-amount">
                <span>Total Due</span>
                <span id="phonepe-amount-display">₹5.00</span>
              </div>
            </div>

            <div class="phonepe-tabs">
              <button type="button" class="phonepe-tab-btn is--active" data-phonepe-tab="qr">UPI QR Code</button>
              <button type="button" class="phonepe-tab-btn" data-phonepe-tab="upi">UPI ID / VPA</button>
              <button type="button" class="phonepe-tab-btn" data-phonepe-tab="card">Cards / NetBanking</button>
            </div>

            <!-- Tab 1: QR -->
            <div id="phonepe-view-qr" class="phonepe-qr-wrap">
              <div class="phonepe-qr-box">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="120" height="120" fill="white"/>
                  <path fill="#5F259F" d="M10 10h30v30H10V10zm6 6v18h18V16H16zm4 4h10v10H20V20zM80 10h30v30H80V10zm6 6v18h18V16H86zm4 4h10v10H90V20zM10 80h30v30H10V80zm6 6v18h18V86H16zm4 4h10v10H20V90z"/>
                  <path fill="#5F259F" d="M50 10h10v10H50zm10 10h10v10H60zm-10 10h10v10H50zm30 10h10v10H80zm-20 0h10v10H60zm20 10h10v10H80zm10-10h10v10H90zm10 10h10v10h-10zm-60 10h10v10H40zm10 10h10v10H50zm10-10h10v10H60zm10 10h10v10H70zm10-10h10v10H80zm20 0h10v10h-10zm-50 20h10v10H50zm10 10h10v10H60zm20-10h10v10H80zm20 10h10v10h-10z"/>
                  <circle cx="60" cy="60" r="14" fill="#5F259F"/>
                  <text x="60" y="66" fill="white" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle">पे</text>
                </svg>
              </div>
              <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 8px;">
                <span style="font-family: var(--font-mono); font-size: 10px; background: #E9ECEF; padding: 2px 8px; border-radius: 6px;">PhonePe</span>
                <span style="font-family: var(--font-mono); font-size: 10px; background: #E9ECEF; padding: 2px 8px; border-radius: 6px;">GPay</span>
                <span style="font-family: var(--font-mono); font-size: 10px; background: #E9ECEF; padding: 2px 8px; border-radius: 6px;">Paytm</span>
              </div>
              <div id="phonepe-timer" class="phonepe-qr-timer">Expires in: 04:59</div>
            </div>

            <!-- Tab 2: UPI ID -->
            <div id="phonepe-view-upi" style="display: none; padding: 1.5em 0;">
              <label style="font-family: var(--font-mono); font-size: 11px; color: #666; display: block; margin-bottom: 6px;">Enter your UPI ID (VPA)</label>
              <input type="text" id="phonepe-vpa-input" placeholder="e.g. yourname@ibl" style="width: 100%; padding: 12px; border: 1.5px solid #CED4DA; border-radius: 10px; font-family: var(--font-mono); font-size: 14px; margin-bottom: 12px;" />
            </div>

            <!-- Tab 3: Card -->
            <div id="phonepe-view-card" style="display: none; padding: 1.5em 0;">
              <input type="text" placeholder="Card Number (XXXX XXXX XXXX XXXX)" style="width: 100%; padding: 10px; border: 1.5px solid #CED4DA; border-radius: 8px; font-family: var(--font-mono); font-size: 13px; margin-bottom: 8px;" />
              <div style="display: flex; gap: 8px;">
                <input type="text" placeholder="MM/YY" style="flex: 1; padding: 10px; border: 1.5px solid #CED4DA; border-radius: 8px; font-family: var(--font-mono); font-size: 13px;" />
                <input type="password" placeholder="CVV" style="width: 80px; padding: 10px; border: 1.5px solid #CED4DA; border-radius: 8px; font-family: var(--font-mono); font-size: 13px;" />
              </div>
            </div>

            <button type="button" id="phonepe-submit-btn" class="phonepe-pay-btn">
              <span id="phonepe-pay-btn-label">Pay ₹5.00 with PhonePe</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>

            <div id="phonepe-processing-status" style="display: none; text-align: center; margin-top: 1em; font-family: var(--font-mono); font-size: 11px; color: #5F259F;">
              Connecting with PhonePe PG...
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Setup View Modal / Screen (Minimal & Blank Canvas) -->
      <div id="v-setup-modal" class="v-modal-overlay">
        <div class="v-modal-container v-modal-container--wide" style="min-height: 85vh; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(11, 11, 15, 0.08); padding-bottom: 1.2em;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="/assets/696179694070e2fa9eca375f_logo.svg" alt="Viralyst Logo" style="height: 32px;" />
              <span style="font-family: var(--font-mono); font-size: 11px; background: rgba(16, 185, 129, 0.15); color: #10B981; border: 1px solid #10B981; padding: 3px 10px; border-radius: 20px; font-weight: 700;">
                <span id="v-setup-plan-badge">PLUS PLAN ACTIVE &bull; 40 REELS/MO</span>
              </span>
            </div>

            <div style="display: flex; align-items: center; gap: 14px;">
              <div class="v-user-chip" style="margin-bottom: 0;">
                <span class="v-user-chip-avatar" id="v-setup-avatar">A</span>
                <span id="v-setup-user-email">arjun.chandra@gmail.com</span>
              </div>
              <button type="button" id="v-setup-logout-btn" style="background: none; border: 1px solid rgba(11, 11, 15, 0.2); border-radius: 20px; padding: 6px 14px; font-family: var(--font-mono); font-size: 11px; cursor: pointer;">
                Logout
              </button>
            </div>
          </div>

          <!-- Blank Setup Canvas -->
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3em 1em; text-align: center;">
            <div style="margin-bottom: 1.5em;">
              <span style="font-family: var(--font-mono); font-size: 11px; color: var(--coral-red); font-weight: 700; letter-spacing: 0.08em;">[STEP 01: WORKSPACE SETUP]</span>
              <h2 style="font-family: var(--font-display); font-size: 2.6em; font-weight: 800; letter-spacing: -0.03em; margin: 0.2em 0 0.4em 0;">Workspace Setup</h2>
              <p style="font-family: var(--font-body); font-size: 1.05em; color: rgba(11, 11, 15, 0.65); max-width: 520px; margin: 0 auto;">
                Your subscription has been activated successfully. Setup your brand profile and short-form targets to initialize your intelligence dashboard.
              </p>
            </div>

            <div class="v-setup-blank-canvas">
              <div style="width: 54px; height: 54px; border-radius: 50%; background: rgba(49, 92, 255, 0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 1em;">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#315CFF" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <div style="font-family: var(--font-display); font-size: 1.25em; font-weight: 700; margin-bottom: 0.4em;">
                Setup Engine Initialized
              </div>
              <div style="font-family: var(--font-mono); font-size: 12px; color: rgba(11, 11, 15, 0.5); max-width: 420px; line-height: 1.5;">
                [BLANK CANVAS STANDBY &bull; AWAITING BRAND ONBOARDING CONFIGURATION]
              </div>
            </div>
          </div>

          <div style="text-align: center; padding-top: 1em; border-top: 1px solid rgba(11, 11, 15, 0.08);">
            <button type="button" data-close-modal="" style="background: none; border: none; font-family: var(--font-mono); font-size: 11px; color: #666; cursor: pointer;">
              &larr; Return to Landing Page
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalWrapper);
    bindEvents();
  }

  function openModal(modalId) {
    closeAllModals();
    const target = document.getElementById(modalId);
    if (target) {
      target.classList.add('is--active');
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    }
  }

  function closeAllModals() {
    document.querySelectorAll('.v-modal-overlay').forEach(m => m.classList.remove('is--active'));
    document.body.style.overflow = '';
    if (window.lenis) window.lenis.start();
    if (qrInterval) clearInterval(qrInterval);
  }

  function handleLoginClick(e) {
    if (e) e.preventDefault();

    if (currentUser && currentSubscription) {
      showSetupScreen();
    } else if (currentUser) {
      showPlanModal();
    } else {
      openModal('v-auth-modal');
    }
  }

  function showPlanModal() {
    const chipName = document.getElementById('v-plan-user-name');
    const chipAvatar = document.querySelector('#v-plan-user-chip .v-user-chip-avatar');
    if (currentUser && chipName && chipAvatar) {
      chipName.textContent = currentUser.name || currentUser.email;
      chipAvatar.textContent = (currentUser.name ? currentUser.name[0] : 'U').toUpperCase();
    }
    openModal('v-plan-modal');
  }

  function completeGoogleAuth(name, email) {
    currentUser = {
      name: name,
      email: email,
      avatar: name ? name[0].toUpperCase() : 'U',
      authProvider: 'google',
      verifiedAt: new Date().toISOString()
    };
    localStorage.setItem('viralyst_user', JSON.stringify(currentUser));

    const statusEl = document.getElementById('v-auth-status');
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.textContent = 'Verified as ' + email + '! Redirecting to plans...';
    }

    setTimeout(() => {
      showPlanModal();
    }, 600);
  }

  function handleChoosePlan(planId) {
    const plan = PLANS[planId];
    if (!plan) return;
    selectedPlan = plan;

    if (plan.id === 'free') {
      currentSubscription = {
        planId: 'free',
        planName: plan.name,
        reelsPerMonth: plan.reelsPerMonth,
        amountPaid: 0,
        currency: 'INR',
        status: 'active',
        activatedAt: new Date().toISOString()
      };
      localStorage.setItem('viralyst_subscription', JSON.stringify(currentSubscription));
      showSetupScreen();
    } else {
      openPhonePe(plan);
    }
  }

  function openPhonePe(plan) {
    const planNameEl = document.getElementById('phonepe-plan-name');
    const amountEl = document.getElementById('phonepe-amount-display');
    const btnLabelEl = document.getElementById('phonepe-pay-btn-label');

    if (planNameEl) planNameEl.textContent = plan.name + ' (' + plan.reelsPerMonth + ' Reels/mo)';
    if (amountEl) amountEl.textContent = plan.priceFormatted;
    if (btnLabelEl) btnLabelEl.textContent = 'Pay ' + plan.priceFormatted + ' with PhonePe';

    startPhonePeTimer();
    openModal('v-phonepe-modal');
  }

  function startPhonePeTimer() {
    if (qrInterval) clearInterval(qrInterval);
    let secondsLeft = 299;
    const timerEl = document.getElementById('phonepe-timer');

    qrInterval = setInterval(() => {
      if (secondsLeft <= 0) {
        clearInterval(qrInterval);
        if (timerEl) timerEl.textContent = 'QR Expired. Please refresh.';
        return;
      }
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      if (timerEl) {
        timerEl.textContent = 'Expires in: ' + String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
      }
      secondsLeft--;
    }, 1000);
  }

  function simulatePhonePePayment() {
    const statusEl = document.getElementById('phonepe-processing-status');
    const submitBtn = document.getElementById('phonepe-submit-btn');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Authorizing ₹' + (selectedPlan ? selectedPlan.price.toFixed(2) : '5.00') + ' with PhonePe...</span>';
    }
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.textContent = 'Connecting to PhonePe Bank Switch...';
    }

    setTimeout(() => {
      if (statusEl) statusEl.textContent = 'Verifying UPI / Card intent with Bank...';
    }, 800);

    setTimeout(() => {
      if (statusEl) statusEl.textContent = 'Payment Authorized! Generating Token...';
      const txnId = 'PP_' + Date.now();

      currentSubscription = {
        planId: selectedPlan ? selectedPlan.id : 'plus',
        planName: selectedPlan ? selectedPlan.name : 'Plus',
        reelsPerMonth: selectedPlan ? selectedPlan.reelsPerMonth : 40,
        amountPaid: selectedPlan ? selectedPlan.price : 5.00,
        currency: 'INR',
        gateway: 'PhonePe',
        transactionId: txnId,
        status: 'active',
        activatedAt: new Date().toISOString()
      };
      localStorage.setItem('viralyst_subscription', JSON.stringify(currentSubscription));

      setTimeout(() => {
        showSetupScreen();
      }, 700);
    }, 1800);
  }

  function showSetupScreen() {
    const badgeEl = document.getElementById('v-setup-plan-badge');
    const emailEl = document.getElementById('v-setup-user-email');
    const avatarEl = document.getElementById('v-setup-avatar');

    if (currentSubscription && badgeEl) {
      badgeEl.textContent = (currentSubscription.planName || 'PLUS').toUpperCase() + ' PLAN ACTIVE • ' + currentSubscription.reelsPerMonth + ' REELS/MO';
    }
    if (currentUser && emailEl) {
      emailEl.textContent = currentUser.email || 'user@gmail.com';
    }
    if (currentUser && avatarEl) {
      avatarEl.textContent = (currentUser.name ? currentUser.name[0] : 'U').toUpperCase();
    }

    openModal('v-setup-modal');
  }

  function bindEvents() {
    document.querySelectorAll('a[href="#login"]').forEach(btn => {
      btn.removeAttribute('target');
      btn.addEventListener('click', handleLoginClick);
    });

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.v-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeAllModals();
      });
    });

    const googleBtn = document.getElementById('v-google-signin-btn');
    const accountPicker = document.getElementById('v-account-picker');
    const statusEl = document.getElementById('v-auth-status');

    if (googleBtn) {
      googleBtn.addEventListener('click', async () => {
        if (typeof window.loginWithRealGoogle === 'function') {
          if (statusEl) {
            statusEl.style.display = 'block';
            statusEl.textContent = 'Opening authentic Google Sign-In popup...';
          }
          try {
            const user = await window.loginWithRealGoogle();
            if (user) {
              completeGoogleAuth(user.displayName || user.email.split('@')[0], user.email);
              return;
            }
          } catch (err) {
            console.warn('Real Google Auth error or credentials pending:', err);
            if (statusEl) {
              statusEl.style.display = 'block';
              if (err.code === 'auth/configuration-not-found' || err.code === 'auth/invalid-api-key' || !err.code) {
                statusEl.innerHTML = '<span style="color:#FF5146;">Firebase credentials required.</span><br/>Please provide your Firebase config in the chat.';
              } else {
                statusEl.textContent = 'Google Auth: ' + (err.message || 'Cancelled');
              }
            }
          }
        }
        if (accountPicker) {
          accountPicker.style.display = 'block';
        }
      });
    }

    const arjunOption = document.querySelector('[data-select-account="arjun"]');
    if (arjunOption) {
      arjunOption.addEventListener('click', () => {
        completeGoogleAuth('Arjun Chandra', 'arjun.chandra@gmail.com');
      });
    }

    const customForm = document.getElementById('v-custom-account-form');
    if (customForm) {
      customForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('v-custom-email');
        if (emailInput && emailInput.value) {
          const email = emailInput.value.trim();
          const name = email.split('@')[0];
          completeGoogleAuth(name, email);
        }
      });
    }

    document.querySelectorAll('[data-choose-plan]').forEach(btn => {
      btn.addEventListener('click', () => {
        const planId = btn.getAttribute('data-choose-plan');
        handleChoosePlan(planId);
      });
    });

    document.querySelectorAll('.phonepe-tab-btn').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.phonepe-tab-btn').forEach(t => t.classList.remove('is--active'));
        tab.classList.add('is--active');

        const tabType = tab.getAttribute('data-phonepe-tab');
        document.getElementById('phonepe-view-qr').style.display = tabType === 'qr' ? 'block' : 'none';
        document.getElementById('phonepe-view-upi').style.display = tabType === 'upi' ? 'block' : 'none';
        document.getElementById('phonepe-view-card').style.display = tabType === 'card' ? 'block' : 'none';
      });
    });

    const phonepeBtn = document.getElementById('phonepe-submit-btn');
    if (phonepeBtn) {
      phonepeBtn.addEventListener('click', simulatePhonePePayment);
    }

    const logoutBtn = document.getElementById('v-setup-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('viralyst_user');
        localStorage.removeItem('viralyst_subscription');
        currentUser = null;
        currentSubscription = null;
        closeAllModals();
      });
    }

    if (window.location.hash === '#login' || window.location.hash === '#auth') {
      handleLoginClick();
    } else if (window.location.hash === '#plans' || window.location.hash === '#pricing') {
      if (!currentUser) {
        completeGoogleAuth('Arjun Chandra', 'arjun.chandra@gmail.com');
      } else {
        showPlanModal();
      }
    } else if (window.location.hash === '#setup') {
      if (!currentUser) completeGoogleAuth('Arjun Chandra', 'arjun.chandra@gmail.com');
      if (!currentSubscription) {
        currentSubscription = { planName: 'Plus', reelsPerMonth: 40, amountPaid: 5.00, currency: 'INR' };
      }
      showSetupScreen();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectModals);
  } else {
    injectModals();
  }

  window.ViralystAuth = {
    open: handleLoginClick,
    showPlans: showPlanModal,
    showSetup: showSetupScreen,
    setUser: (u) => { currentUser = u; localStorage.setItem('viralyst_user', JSON.stringify(u)); },
    setSubscription: (s) => { currentSubscription = s; localStorage.setItem('viralyst_subscription', JSON.stringify(s)); },
    getUser: () => currentUser,
    getSubscription: () => currentSubscription
  };
})();
