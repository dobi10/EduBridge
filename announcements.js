import {db} from "./firebase.js";

import {
collection,
getDocs,
query,
orderBy
}
from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";



async function loadAnnouncements(){


const list =
document.getElementById("announcementList");



const q =
query(
collection(db,"announcements"),
orderBy("date","desc")
);



const data =
await getDocs(q);



data.forEach(doc=>{


const item=doc.data();



list.innerHTML += `

<div class="card">

<h2>${item.title}</h2>

<p>${item.message}</p>

</div>

`;

});


}



loadAnnouncements();
