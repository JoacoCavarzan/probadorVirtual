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

    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Bienvenid@" + userCredential.user.email);

  } catch (error) {

    console.log(error);
    if (error.code === 'auth/email-already-in-use') {
      Swal.fire("Correo electrónico ya en uso")
        .then(() => {
            // Aquí la alerta se ha cerrado
            console.log("Alerta cerrada");
        });
      // showMessage("Correo electrónico ya en uso", "error")
    } else if (error.code === 'auth/invalid-email') {
      Swal.fire("Email inválido")
      .then(() => {
          // Aquí la alerta se ha cerrado
          console.log("Alerta cerrada");
      });
      // showMessage("Email inválido", "error")
    } else if (error.code === 'auth/weak-password') {
      Swal.fire("Contraseña débil<br>(Al menos 6 caracteres)")
      .then(() => {
          // Aquí la alerta se ha cerrado
          console.log("Alerta cerrada");
      });
      // showMessage("Contraseña debil<br>(Menos de 6 caracteres)", "error")
    } else if (error.code) {
      Swal.fire("Algo salió mal")
      .then(() => {
          // Aquí la alerta se ha cerrado
          console.log("Alerta cerrada");
      });
      // showMessage("Algo salió mal", "error")
    }
  }

});