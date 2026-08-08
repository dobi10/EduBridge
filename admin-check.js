import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


onAuthStateChanged(auth, async (user) => {

    if (!user) {
        window.location.replace("login.html");
        return;
    }

    const userDoc = await getDoc(
        doc(db, "users", user.uid)
    );

    if (!userDoc.exists() ||
        userDoc.data().role !== "admin") {

        alert("Admin access required.");
        window.location.replace("dashboard.html");
        return;
    }

    document.body.style.display = "block";
});
