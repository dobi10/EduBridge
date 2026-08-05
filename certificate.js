import { db } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";



export async function createCertificate(
userID,
courseID,
studentName
){


const certificate =
await addDoc(

collection(db,"certificates"),

{

userID,

courseID,

name:studentName,

date:serverTimestamp(),

verified:true

}

);



return certificate.id;


}
