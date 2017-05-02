window.onsubmit = function(e) {
    
    
    e.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    var flag=true;
    sexo=sexo.toLowerCase();


    if(apellido == ""){
        alert("Ingrese nombre y apellido");
        document.getElementById("apellidoR").className="visible";
        flag=false;
    }

    if(nombre == ""){
        alert("Ingrese nombre y apellido");
        document.getElementById("nombreR").className="visible";
        flag=false;
    }
    
    if(isNaN(dni)){
        alert("Ingrese un DNI valido");
        document.getElementById("dniR").className="visible";
        flag=false;
    }

    if(sexo!='m' && sexo!='f'){
        alert('Ingrese el sexo correctamente: "F" para femenino o "M" para masculino');
        document.getElementById("sexoR").className="visible";
        flag=false;
    }

    if(flag){
        alert("Los datos ingresados son validos");
        document.getElementById("nombreR").className="oculto";
        document.getElementById("apellidoR").className="oculto";
        document.getElementById("dniR").className="oculto";
        document.getElementById("sexoR").className="oculto";
    }
}