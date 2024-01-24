import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import  { auth } from './firebase.js'


const registroForm = 
          document.querySelector("#formRegistro");

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = registroForm["correo-registro"].value;
  const password = registroForm["contrasena-registro"].value;


  try{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)
  }
  catch(error){
    console.log(error.code)
  }
})

  