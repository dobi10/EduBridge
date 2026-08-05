import { createCertificate } 
from "./certificate.js";


document
.getElementById("certificateBtn")
.onclick = async()=>{


const id =
await createCertificate(

localStorage.getItem("userID"),

localStorage.getItem("courseID"),

"Student"

);



alert(
"Certificate Created ID: "+id
);


};
