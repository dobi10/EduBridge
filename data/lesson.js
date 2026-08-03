let course = "html";


fetch("data/lessons.json")

.then(response => response.json())

.then(data=>{


const currentCourse = data[course];


document.querySelector(".course-intro h1")
.innerText = currentCourse.title;



const lessonList =
document.querySelector(".lesson-list");


lessonList.innerHTML="<h2>Lessons</h2>";



currentCourse.lessons.forEach((lesson,index)=>{


let button =
document.createElement("button");


button.innerText =
(index+1)+". "+lesson.name;



button.onclick=()=>{


document.querySelector(".lesson-content")
.innerHTML = `

<h2>${lesson.name}</h2>

<p>${lesson.content}</p>

<h3>Example:</h3>

<pre>${lesson.code}</pre>

<button class="complete">
Complete Lesson
</button>

`;

};


lessonList.appendChild(button);


});


});
