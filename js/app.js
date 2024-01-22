// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import auth module


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const form = document.forms["formLogin"];

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const email = form['correo'].value;
  const password = form['password'].value;

  console.log(`Correo: ${email}, password: ${password}`);

  return loginUser(email, password);
}
 import {auth} from "./firebase.js"
const loginform = document.querySelector{"#formLogin"};
loginform.addEventListener("submit", async(e) =>{
  e.preventDefault();

  const email = loginform["usuario"].value;
  const Contraseña = loginform["Contraseña"].value;
})

loginUser(email, password) {
  console.log(`Correo: ${email}, password: ${password}`);

  const auth = getAuth(app); // Get the auth object from the app

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in
      const user = userCredential.user;git
      console.log("User signed in:", user);
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error:", errorCode, errorMessage);
    });
}
