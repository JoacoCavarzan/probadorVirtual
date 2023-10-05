import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#signin-form");

signInForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);

    signInForm.reset();

    // show welcome message
      
    showMessage("Bienvenid@" + userCredentials.user.email);
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      Swal.fire("Contraseña incorrecta")
        .then(() => {
            // Aquí la alerta se ha cerrado
            console.log("Alerta cerrada");
        });
      // showMessage("Contraseña incorrecta", "error");
    } else if (error.code === "auth/user-not-found") {
      Swal.fire("Usuario no encontrado")
        .then(() => {
            // Aquí la alerta se ha cerrado
            console.log("Alerta cerrada");
        });
      // showMessage("Usuario no encontrado", "error");
    } else {
      Swal.fire("Algo salió mal")
        .then(() => {
            // Aquí la alerta se ha cerrado
            console.log("Alerta cerrada");
        });
      // showMessage("Algo salió mal", "error");
    }
  }
});
