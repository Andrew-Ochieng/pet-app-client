import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import AddPet from './pages/Pets/AddPet';
import Pets from './pages/Pets/Pets';
import Signup from './pages/Signup';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"
 
function App() {
  const [loggedIn, setLoggedIn] = useState(!!JSON.parse(localStorage.getItem('loggedIn')))
  console.log("Logged in: ", loggedIn)


  // setup-firebase


  const firebaseConfig = {
  apiKey: "AIzaSyCb1g9S2YDNrOZhgHTEzBQEWb_kovE5IIo",
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
const db =  getFirestore()

// collection ref
const colRef = collection(db, 'pets')


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




  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/add-pet' element={ 
            <AddPet 
              addDoc={addDoc}
              colRef={colRef} 
            /> } 
          />
          <Route path='/pets' element={ 
            <Pets 
              loggedIn={loggedIn} 
              colRef={colRef} 
              getDocs={getDocs} 
              // addDoc={addDoc}
            /> } 
          />
          <Route path='/login' element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> } />
          <Route path='/signup' element={ <Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
