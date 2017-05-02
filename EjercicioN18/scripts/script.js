window.onsubmit = function(e){
    e.preventDefault();

    var fila = parseInt(document.getElementById("fila").value);
    var columna = parseInt(document.getElementById("columna").value);
    var div =document.getElementById("miDiv");
    var tabla = document.createElement("TABLE");
    tabla.id = "tabla";
    tabla.border='1';
    var tbody = document.createElement("TBODY");
    tabla.appendChild(tbody);

    for(var i = 0; i < fila; i++){
        var tr = document.createElement("TR");
        tbody.appendChild(tr);
        for(var j = 0; j < columna; j++){
            var td=  document.createElement("TD");
            td.widnth='75';
            
            td.appendChild(document.createTextNode("Celda " + i + "," + j));
            tr.appendChild(td);
        }
    }
    miDiv.appendChild(tabla);    
}
    
