import { db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const userID = localStorage.getItem("userID");


async function loadDashboard(){


const userRef = doc(db,"users",userID);

const userSnap = await getDoc(userRef);



if(userSnap.exists()){


const user = userSnap.data();



document.getElementById("xp")
.innerText = user.xp || 0;


document.getElementById("level")
.innerText = user.level || 1;


document.getElementById("completed")
.innerText =
(user.completedLessons || []).length;



}


}


loadDashboard();
