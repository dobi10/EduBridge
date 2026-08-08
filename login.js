import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


const form = document.getElementById("loginForm");


form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


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

        alert("Login failed: " + error.message);

    }

});
