import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


document
.getElementById("publishCourse")
.addEventListener("click", async ()=>{


const title =
document.getElementById("courseTitle").value;


const description =
document.getElementById("courseDescription").value;


const level =
document.getElementById("courseLevel").value;


const category =
document.getElementById("courseCategory").value;



if(!title || !description){

alert("Fill required fields");

return;

}



try{


await addDoc(
collection(db,"courses"),
{

title,
description,
level,
category,

lessons:0,

createdAt:
serverTimestamp()

});


alert("Course published successfully ✅");


}

catch(error){

alert(error.message);

}


});
