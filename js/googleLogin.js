import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    console.log("google sign in");

    showMessage("Bienvenid@" + credentials.user.displayName, "success");
  } catch (error) {
    console.log(error);
  }
});
