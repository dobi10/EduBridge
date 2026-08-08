import { auth } from "./firebase.js";

import {
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


window.logout = async function () {

    try {

        await signOut(auth);

        localStorage.removeItem("userID");

        window.location.href = "login.html";

    } catch (error) {

        console.error(error);

        alert("Could not log out.");

    }

};
