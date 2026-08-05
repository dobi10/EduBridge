import { db } from "./firebase.js";

import {
doc,
updateDoc,
arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";



export async function addBadge(userID,badge){


const userRef =
doc(db,"users",userID);



await updateDoc(userRef,{

badges:
arrayUnion(badge)

});


}
