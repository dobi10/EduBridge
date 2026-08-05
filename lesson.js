import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const courseID =
localStorage.getItem("courseID");


const lessonList =
document.querySelector(".lesson-list");


const lessonContent =
document.querySelector(".lesson-content");



async function loadLessons(){


const lessonsSnapshot =
await getDocs(

collection(
db,
"courses",
courseID,
"lessons"
)

);



lessonList.innerHTML =
"<h2>Lessons</h2>";



let lessons=[];


lessonsSnapshot.forEach(doc=>{

lessons.push(doc.data());

});



lessons.sort(
(a,b)=>a.order-b.order
);



lessons.forEach((lesson)=>{


const button =
document.createElement("button");


button.innerText =
lesson.title;


button.onclick=()=>{


lessonContent.innerHTML=`

<h2>${lesson.title}</h2>

<p>
${lesson.content}
</p>

<h3>Example:</h3>

<pre>
${lesson.code}
</pre>

<button>
Complete Lesson
</button>

`;

};



lessonList.appendChild(button);



});


}


loadLessons();
