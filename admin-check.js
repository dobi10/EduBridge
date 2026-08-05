import { db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const userID =
localStorage.getItem("userID");


async function checkAdmin(){


const userRef =
doc(db,"users",userID);


const userSnap =
await getDoc(userRef);



if(!userSnap.exists()){

window.location.href="login.html";

return;

}



const user =
userSnap.data();



if(user.role !== "admin"){

alert("Access denied");

window.location.href="dashboard.html";

}


}


checkAdmin();
