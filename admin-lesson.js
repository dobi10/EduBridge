import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


document
.getElementById("addLesson")
.onclick = async()=>{


const courseID =
document.getElementById("courseID").value;


const title =
document.getElementById("lessonTitle").value;


const content =
document.getElementById("lessonContent").value;


const code =
document.getElementById("lessonCode").value;



await addDoc(

collection(
db,
"courses",
courseID,
"lessons"
),

{

title,
content,
code,
order:1

}


);


alert("Lesson added ✅");


};
