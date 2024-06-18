import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "belajar-next-js-41323",
  storageBucket: "belajar-next-js-41323.appspot.com",
  messagingSenderId: "2554155300",
  appId: "1:2554155300:web:17cd315b0cfb6e40f963b1",
};

const app = initializeApp(firebaseConfig);

export default app;
