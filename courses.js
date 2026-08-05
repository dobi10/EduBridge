import { db } from "./firebase.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const courseList =
document.getElementById("courseList");


async function loadCourses(){

const snapshot =
await getDocs(collection(db,"courses"));


courseList.innerHTML="";


snapshot.forEach((doc)=>{

const course = doc.data();


courseList.innerHTML += `

<div class="course-card">

<h2>${course.title}</h2>

<p>${course.description}</p>

<span>${course.level}</span>

<p>${course.category}</p>

<button onclick="openCourse('${doc.id}')">
Start Course
</button>

</div>

`;

});


}



window.openCourse = function(id){

localStorage.setItem(
"courseID",
id
);

window.location.href="course.html";

}



loadCourses();
