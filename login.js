import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
sendPasswordResetEmail,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = async () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

try{

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

window.location.href = "dashboard.html";

}catch(error){

alert(error.message);

}

};


document.getElementById("resetPassword").onclick = async () => {

const email = document.getElementById("email").value;

if(!email){
alert("Enter your email first.");
return;
}

try{

await sendPasswordResetEmail(auth,email);

alert("Password reset email sent.");

}catch(error){

alert(error.message);

}

};


export async function logout(){

await signOut(auth);

window.location.href="login.html";

}
