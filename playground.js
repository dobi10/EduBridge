function runCode(){

let code = window.editor.getValue();


let output =
document.getElementById("output")
.contentWindow.document;


output.open();

output.write(code);

output.close();

}
