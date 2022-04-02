import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';


const firebaseConfig = {

 apiKey: "AIzaSyByJyXa8YS5K0-EMv8jAUutJ_0ijzRVqwE",

 authDomain: "lagos-school-of-programming.firebaseapp.com",

 projectId: "lagos-school-of-programming",

 storageBucket: "lagos-school-of-programming.appspot.com",

 messagingSenderId: "722285553772",

 appId: "1:722285553772:web:2bc9ef4fbb757f7e105049",

 measurementId: "G-C6RZ6W1M47"

};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



