import { loginWithRealGoogle, logoutUser, auth, firebaseConfig } from './firebase';

console.log('Viralyst Platform loaded successfully with Firebase Auth.');

// Expose to window for global access and auth-payment-flow.js
(window as any).loginWithRealGoogle = loginWithRealGoogle;
(window as any).logoutUser = logoutUser;
(window as any).firebaseAuth = auth;
(window as any).firebaseConfig = firebaseConfig;
