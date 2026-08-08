import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


const form = document.getElementById("loginForm");
const button = document.getElementById("loginBtn");
const message = document.getElementById("loginMessage");


form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    button.disabled = true;
    button.textContent = "Logging in...";

    message.textContent = "";


    try {

        const result =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


        localStorage.setItem(
            "userID",
            result.user.uid
        );


        window.location.href =
            "dashboard.html";


    } catch (error) {

        console.error(error);

        message.textContent =
            "Login failed. Check your email and password.";

        button.disabled = false;
        button.textContent = "Login";

    }

});
