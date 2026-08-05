import {
doc,
updateDoc,
increment,
arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
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
document
.addEventListener("click", async(e)=>{


if(e.target.id === "submitQuiz"){


let score = 0;


questions.forEach((q,index)=>{


const answer =
document.getElementById(
"answer"+index
).value;


if(answer.toLowerCase().trim()
=== q.answer.toLowerCase().trim()){

score += q.points || 10;

}


});



const userID =
localStorage.getItem("userID");



const userRef =
doc(db,"users",userID);



await updateDoc(userRef,{

xp: increment(score),

quizScores: arrayUnion({

courseID: courseID,

score: score,

date: new Date()

})

});



alert(
`Quiz finished! You earned ${score} XP 🎉`
);


}

});
