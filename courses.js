const search = document.getElementById("search");

const courses = document.querySelectorAll(".course-card");


search.addEventListener("input",()=>{

    const value =
    search.value.toLowerCase();


    courses.forEach(course=>{

        const text =
        course.innerText.toLowerCase();


        if(text.includes(value)){

            course.style.display="block";

        }else{

            course.style.display="none";

        }

    });


});
