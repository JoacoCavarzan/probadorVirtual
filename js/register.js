import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential)

    // Close the signup modal
    // const signupModal = document.querySelector('#signupModal');
    // const modal = bootstrap.Modal.getInstance(signupModal);
    // modal.hide();

    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredential.user.email);

  } catch (error) {

    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Correo electrónico ya en uso", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Email inválido", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Contraseña debil(Menos de 6 caracteres)", "error")
    } else if (error.code) {
      showMessage("Algo salió mal", "error")
    }
  }

});