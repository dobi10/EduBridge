require.config({
    paths:{
        vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
    }
});

require(["vs/editor/editor.main"],function(){

window.editor = monaco.editor.create(
document.getElementById("editor"),
{
value:`<!DOCTYPE html>
<html>
<head>
<title>Hello</title>
</head>
<body>

<h1>Hello CodeSphere</h1>

</body>
</html>`,
language:"html",
theme:"vs-dark",
automaticLayout:true,
fontSize:16,
minimap:{
enabled:true
}
});

});
