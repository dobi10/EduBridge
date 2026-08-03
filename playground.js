function runCode(){

let code =
document.getElementById("code").value;


let output =
document.getElementById("output")
.contentWindow.document;


output.open();

output.write(code);

output.close();

}
