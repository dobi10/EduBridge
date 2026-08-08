import { auth, db } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const form =
    document.getElementById("signupForm");

const button =
    document.getElementById("signupBtn");

const message =
    document.getElementById("signupMessage");


form.addEventListener("submit", async (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value.trim();


    const email =
        document.getElementById("email")
        .value.trim();


    const password =
        document.getElementById("password")
        .value;


    const confirmPassword =
        document.getElementById("confirmPassword")
        .value;


    if (password !== confirmPassword) {

        message.textContent =
            "Passwords do not match.";

        return;
    }


    button.disabled = true;
    button.textContent = "Creating account...";
    message.textContent = "";


    try {

        const result =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );


        await setDoc(
            doc(db, "users", result.user.uid),
            {
                name: name,
                email: email,
                role: "student",
                xp: 0,
                level: 1,
                completedLessons: [],
                badges: [],
                quizScores: []
            }
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
            "Could not create account. Please try again.";

        button.disabled = false;
        button.textContent =
            "Create Account";

    }

});
