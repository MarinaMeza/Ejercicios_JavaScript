window.onload = function()
{
    
    var rta;

    do {
        var numero = prompt("Ingrese un numero: ");
        numero = parseInt (numero);
    } while (numero < 0);
    
    var aux = numero;
    rta = factorial(numero);

    document.write("El factorial de "+aux+" es: "+rta);
}

function factorial(numero)
{  
    if(numero == 0)
    {
        return 1;
    }
    else
    {
        return numero*(factorial(numero-1));
    }
}