const questions=[

{
q:"What does HTML stand for?",
a:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Home Tool Markup Language"
],
correct:0
},


{
q:"Which tag creates a heading?",
a:[
"<p>",
"<h1>",
"<img>"
],
correct:1
}

];


let current=0;
let score=0;



function loadQuestion(){

let q=questions[current];


document.getElementById("question")
.innerHTML=q.q;


let box=document.getElementById("answers");

box.innerHTML="";


q.a.forEach((answer,index)=>{

let btn=document.createElement("button");

btn.innerText=answer;


btn.onclick=()=>{

if(index===q.correct){

score++;

}

};


box.appendChild(btn);

});

}


function nextQuestion(){

current++;


if(current < questions.length){

loadQuestion();

}else{

document.getElementById("score")
.innerText=
"Your Score: "+score+"/"+questions.length;

}

}



loadQuestion();
