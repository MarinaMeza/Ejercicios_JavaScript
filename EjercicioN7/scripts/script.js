window.onload = function(){
    var nombre=prompt("Ingrese su nombre: ");
    var apellido=prompt("Ingrese su apellido: ");

    MostrarNombreApellido(nombre,apellido);
}

function MostrarNombreApellido(pNombre,pApellido)
{
    pNombre=pNombre.toLowerCase();
    pNombre=pNombre.toUpperCase().charAt(0) + pNombre.substring(1);
    document.write(pApellido.toUpperCase()+", "+pNombre);
}