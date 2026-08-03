function addCourse(){

let name =
document.getElementById("courseName").value;


let description =
document.getElementById("description").value;


if(name=="" || description==""){

alert("Fill all fields");

return;

}



document.getElementById("message")
.innerHTML =
`
<h3>Course Added Successfully ✅</h3>
<p>${name}</p>
`;

}
