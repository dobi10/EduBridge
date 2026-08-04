function sendMessage(){

const input = document.getElementById("userMessage");

const chat = document.getElementById("chatBox");

const message = input.value.trim();

if(message==="") return;

chat.innerHTML += `
<div class="user">
<b>You:</b> ${message}
</div>
`;

chat.innerHTML += `
<div class="bot">
<b>AI:</b> Connect this page to the OpenAI API or another AI service to generate personalized coding explanations and feedback.
</div>
`;

input.value="";

chat.scrollTop = chat.scrollHeight;

}
