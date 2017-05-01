window.onsubmit = function(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dni = document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    var flag=true;

    sexo=sexo.toLowerCase();

    if(nombre == "" || apellido == ""){
        alert("Ingrese nombre y apellido");
        flag=false;
    }

    if(isNaN(dni)){
        alert("Ingrese un DNI valido");
        flag=false;
    }

    if(sexo!='m' && sexo!='f'){
        alert('Ingrese el sexo correctamente: "F" para femenino o "M" para masculino');
        flag=false;
    }

    if(flag){
        alert("Los datos ingresados son validos");
    }
}