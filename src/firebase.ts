import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

// Official Viralyst Firebase Configuration
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC9WGGFyt8Ucm4-s2O_yhZP_o66QjhTC2g",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "viralyst-a1bf4.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "viralyst-a1bf4",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "viralyst-a1bf4.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "25758821359",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:25758821359:web:477fdbb9e285463043a41a"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export async function loginWithRealGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function logoutUser() {
  await signOut(auth);
}
