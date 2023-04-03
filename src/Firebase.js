import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore"


// setup-firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "pet-app-d3778.firebaseapp.com",
    projectId: "pet-app-d3778",
    storageBucket: "pet-app-d3778.appspot.com",
    messagingSenderId: "715598480700",
    appId: "1:715598480700:web:5679c8c84057d6cfaeca39",
    measurementId: "G-BV35DYWDHS"
  };
  
  // initialize firebase app
  initializeApp(firebaseConfig)
  
  // initialize services
export const db =  getFirestore()
  
  // collection ref
  export const colRef = collection(db, 'pets')
  
  
  // get collection data
  // getDocs(colRef)
    // .then((snapshot) => {
    //   // console.log(snapshot.docs)
    //   let pets = []
    //   snapshot.docs.forEach((doc) => {
    //     pets.push({...doc.data(), id: doc.id})
    //   })
    //   console.log(pets)
    // })