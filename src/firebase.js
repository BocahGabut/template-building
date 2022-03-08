import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD6wZ5ImDeYTxReFNp_lW12NxmKIWcgMdk",
    authDomain: "rumahakad-af900.firebaseapp.com",
    projectId: "rumahakad-af900",
    storageBucket: "rumahakad-af900.appspot.com",
    messagingSenderId: "831264026485",
    appId: "1:831264026485:web:85afbc4c8dde7329b66d3c",
    measurementId: "G-PJLWWK65S7"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)