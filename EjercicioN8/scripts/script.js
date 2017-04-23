window.onload = function(){

    var texto=prompt("Ingrese texto que desea confimar es palíndromo: ");

    Palindromo(texto);
    //Palindromo("La ruta nos aporto otro paso natural");
    
}

function Palindromo(pTexto)
{
    pTexto=pTexto.toLowerCase();
    pTexto=pTexto.replace(/ /g,"");

    if(pTexto==pTexto.split("").reverse().join(""))
    {
        document.write("El texto es un palíndromo");
    }else{
        document.write("El texto no es un palíndromo");
    }
}