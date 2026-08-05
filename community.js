import {db} from "./firebase.js";


import {
collection,
addDoc,
getDocs,
serverTimestamp
}
from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";



const posts =
document.getElementById("posts");



document
.getElementById("postBtn")
.onclick=async()=>{


let message =
document.getElementById("postText").value;



await addDoc(
collection(db,"community"),
{

message,

likes:0,

createdAt:
serverTimestamp()

}

);


loadPosts();

};



async function loadPosts(){


posts.innerHTML="";


const data =
await getDocs(
collection(db,"community")
);



data.forEach(post=>{


let p=post.data();


posts.innerHTML += `

<div class="card">

<p>${p.message}</p>

❤️ ${p.likes}

</div>

`;

});


}


loadPosts();
