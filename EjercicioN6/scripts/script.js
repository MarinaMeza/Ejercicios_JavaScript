window.onload = function(){

    var palabra=prompt("Ingrese una palabra: ");

    var rta=validar(palabra);

    switch (rta) {
        case 0:
            document.write("mezcla");
            break;
        case 1:
            document.write("solo lower");
            break;
        case 2:
            document.write("solo upper");
            break;
    }
}

function validar(pPalabra)
{   
    var rta;//1-solo lower,2-solo upper,3-las dos
    var flag1=0;
    var flag2=0;

    for (var i = 0; i < pPalabra.length; i++) {
        if (pPalabra[i]==pPalabra[i].toLowerCase() && pPalabra[i]!=pPalabra.toUpperCase()) {

            rta=1;
            flag1=1;
        }
        else
        {
            rta=2;
            flag2=1;
        }
    }
    
    if (flag1==1 && flag2==1)
    {
        rta=0;
    }
    return rta;
}