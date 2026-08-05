import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const courseID = localStorage.getItem("courseID");

const quizBox = document.getElementById("quizBox");

let questions = [];


async function loadQuiz(){

const snapshot = await getDocs(
collection(db,"courses",courseID,"quizzes")
);


snapshot.forEach(doc=>{

questions.push(doc.data());

});


quizBox.innerHTML = "";


questions.forEach((q,index)=>{

quizBox.innerHTML += `

<div class="quiz-card">

<h3>
${index+1}. ${q.question}
</h3>

<input id="answer${index}" 
placeholder="Your answer">

</div>

`;

});


quizBox.innerHTML += `

<button id="submitQuiz">
Submit Quiz
</button>

`;

}


loadQuiz();
