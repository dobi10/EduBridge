import { db } from "./firebase.js";

import {
doc,
updateDoc,
arrayUnion,
increment
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const userID = localStorage.getItem("userID");



window.completeLesson = async function(lessonID){


const userRef =
doc(db,"users",userID);



await updateDoc(userRef,{

completedLessons:
arrayUnion(lessonID),


xp:
increment(10)

});


alert("Lesson completed! +10 XP 🎉");


};
