import { initializeApp ,getApp, getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_API_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_API_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_API_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_API_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provide = new GoogleAuthProvider();

export const db = getFirestore(app);


export const signInWithGooglePopup = async (auth, provide) => {
    return await signInWithPopup(auth, provide);
}

export const signInWithGoogleRedirect = async (auth, provide) => {
    return await signInWithRedirect(auth, provide);
}

export const getGoogleRedirectResult = async (auth) => { 
    return await getRedirectResult(auth);
}