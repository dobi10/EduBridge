document
.getElementById("publishCourse")
.addEventListener("click", () => {

const title =
document.getElementById("courseTitle").value;

const description =
document.getElementById("courseDescription").value;

const level =
document.getElementById("courseLevel").value;

const category =
document.getElementById("courseCategory").value;

if (!title || !description) {
    alert("Please fill in all required fields.");
    return;
}

alert(`Course "${title}" is ready to publish.`);

// Next step: Save this to Firestore

});
