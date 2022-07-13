import firebaseConfig from "./firebase.config";
import { initializeApp } from 'firebase/app';

const initializeAuthenication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthenication;