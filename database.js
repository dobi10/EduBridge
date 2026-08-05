import { db } from "./firebase.js";

import {
doc,
setDoc,
getDoc,
updateDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export async function createUser(uid,email){

await setDoc(doc(db,"users",uid),{

email,
xp:0,
level:1,
streak:0,
completedLessons:[],
completedCourses:[],
quizScores:{},
bookmarks:[],
createdAt:serverTimestamp()

});

}

export async function getUser(uid){

const snap = await getDoc(doc(db,"users",uid));

return snap.data();

}

export async function saveLesson(uid,lesson){

await updateDoc(doc(db,"users",uid),{

completedLessons:lesson

});

}
