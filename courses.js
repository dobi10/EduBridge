// Load all courses
fetch("data/courses.json")
.then(response => response.json())
.then(courses => {

    const container = document.getElementById("courseList");
    container.innerHTML = "";

    courses.forEach(course => {

        container.innerHTML += `
        <div class="course-card">

            <h2>${course.name}</h2>

            <p>${course.description}</p>

            <span>${course.level}</span>

            <p>${course.lessons} Lessons</p>

            <button onclick="openCourse('${course.name.toLowerCase()}')">
                Start Course
            </button>

        </div>
        `;
    });

    // Search functionality
    const search = document.getElementById("search");

    search.addEventListener("input", () => {

        const value = search.value.toLowerCase();
        const cards = document.querySelectorAll(".course-card");

        cards.forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

})
.catch(error => {
    console.error("Error loading courses:", error);
});

// Open selected course
function openCourse(course) {

    localStorage.setItem("selectedCourse", course);

    window.location.href = "course.html";

}
