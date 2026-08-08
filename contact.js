const form = document.getElementById("contactForm");
const status = document.getElementById("contactStatus");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    status.textContent =
        "Thanks! Your message has been received.";

    form.reset();

});
