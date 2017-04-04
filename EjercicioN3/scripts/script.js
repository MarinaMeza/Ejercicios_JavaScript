window.onload = function numero()
{
    var numero;

    numero=prompt("Ingrese un numero: ");
    
    if((numero)%2==0)
    {
        alert("El numero "+numero+" es par");
    }
    else
    {
        alert("El numero "+numero+" es impar");
    }
}