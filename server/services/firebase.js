const { initializeApp } = require('firebase-admin/app');
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY, 
  apiKey: "AIzaSyD3seHnUqH5bghNhDe_pQQkfvjul7azniU",
  authDomain: "blog-blound.firebaseapp.com",
  projectId: "blog-blound",
  storageBucket: "blog-blound.firebasestorage.app",
  messagingSenderId: "711247902597",
  // appId: import.meta.env.VITE_APP_ID,
  appId: "1:711247902597:web:171260092363b8a3f976ec",
  measurementId: "G-E8VLTCMCGB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
