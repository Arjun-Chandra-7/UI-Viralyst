import { loginWithRealGoogle, logoutUser, auth } from './firebase';

console.log('Viralyst Platform loaded successfully.');

// Expose to window for auth-payment-flow.js
(window as any).loginWithRealGoogle = loginWithRealGoogle;
(window as any).logoutUser = logoutUser;
(window as any).firebaseAuth = auth;
