import {auth} from "./firebase.js";


import {

createUserWithEmailAndPassword

}

from 

"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



document
.getElementById("signup")
.onclick=()=>{


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



createUserWithEmailAndPassword(
auth,
email,
password
)

.then(()=>{

alert("Account created!");

window.location="dashboard.html";

})

.catch(error=>{

alert(error.message);

});


};
