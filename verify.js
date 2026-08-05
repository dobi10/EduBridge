import { db } from "./firebase.js";

import {
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


document
.getElementById("verifyBtn")
.onclick = async()=>{


const id =
document.getElementById("certificateID").value;


const certificate =
await getDoc(
doc(db,"certificates",id)
);



if(certificate.exists()){


const data = certificate.data();


document.getElementById("result").innerHTML = `

<h2>✅ Valid Certificate</h2>

<p>Student: ${data.name}</p>

<p>Course: ${data.courseID}</p>

<p>Status: Verified</p>

`;


}else{


document.getElementById("result").innerHTML =
"<h2>❌ Certificate Not Found</h2>";


}


};
