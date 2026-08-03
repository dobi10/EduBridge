document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function(e){

            const target = this.getAttribute("href");

            if(target && target.startsWith("#")){

                e.preventDefault();

                document.querySelector(target)
                .scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



    // Login button demo
    const loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click",()=>{

        alert(
        "Login system coming soon 🚀"
        );

    });



    // Course card animation
    const cards = document.querySelectorAll(".card");


    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{
        threshold:0.2
    });



    cards.forEach(card=>{

        card.style.opacity="0";
        card.style.transform="translateY(40px)";
        card.style.transition="0.6s";

        observer.observe(card);

    });


});
