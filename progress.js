import { db } from "./firebase.js";

import {
doc,
updateDoc,
arrayUnion,
increment,
getDoc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import { addBadge } from "./badges.js";


const userID = localStorage.getItem("userID");



window.completeLesson = async function(lessonID){


if(!userID){

alert("Please login first.");

return;

}


try{


const userRef = doc(db,"users",userID);


// Get current user data
const userSnap = await getDoc(userRef);


const userData = userSnap.data();


const completed =
userData.completedLessons || [];


// Prevent duplicate XP
if(completed.includes(lessonID)){

alert("You already completed this lesson.");

return;

}



// Save lesson + give XP

await updateDoc(userRef,{

completedLessons:
arrayUnion(lessonID),

xp:
increment(10)

});



// First lesson badge

if(completed.length === 0){

await addBadge(
userID,
"🌱 First Step"
);

}


// Course progress badge

if(completed.length + 1 >= 50){

await addBadge(
userID,
"🏆 Course Master"
);

}



alert("Lesson completed! +10 XP 🎉");


}

catch(error){

console.log(error);

alert(
"Something went wrong."
);

}


};
