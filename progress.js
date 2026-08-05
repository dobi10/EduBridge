import { db } from "./firebase.js";

import {
doc,
updateDoc,
arrayUnion,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";



const userID = localStorage.getItem("userID");



window.completeLesson = async function(lessonID){


const userRef =
doc(db,"users",userID);



await updateDoc(userRef,{

completedLessons:
arrayUnion(lessonID)

});



alert("Lesson completed ✅");


};
