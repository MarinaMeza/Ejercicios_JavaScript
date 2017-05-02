window.onsubmit = function(e){
    e.preventDefault();

    var curso = document.getElementById("curso").value;

    var node = document.createElement("LI");
    var textnode = document.createTextNode(curso);
    node.appendChild(textnode);
    document.getElementById("miLista").appendChild(node);
}