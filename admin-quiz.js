import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


document
.getElementById("addQuiz")
.onclick = async()=>{


const courseID =
document.getElementById("courseID").value;


const question =
document.getElementById("question").value;


const answer =
document.getElementById("answer").value;


const points = 10;



await addDoc(

collection(
db,
"courses",
courseID,
"quizzes"
),

{
question,
answer,
points
}

);


alert("Quiz added ✅");


};
