window.onsubmit = function(e){
    e.preventDefault();
    
    var cant = document.getElementById("texto").value;
    var combo = document.createElement("SELECT");
    
    for (var i = 0; i < cant; i++) 
    {
        var opt = document.createElement("OPTION");
        var t = document.createTextNode(i+1);
        opt.appendChild(t);
        combo.appendChild(opt);
        document.getElementById("miDiv").appendChild(combo);
    }
}