window.onload = function()
{
    
    var parrafos = document.getElementsByTagName("p");
    var max=0;
    var num=100;
    var contador=0;
    
    for (var i = 1; ; i++)
    {
        for (var j = 1; j <= i; j++)
        {
            if (i % j == 0)
            {
                contador++;
            }
        }
        if (contador == 2)
        {
            parrafos.innerHTML=document.write((max+1)+" - Numero primo: "+i+"<br>");
            max++;
        }
        if(max==20)
        {
            break;
        }
        contador = 0;
    }
    
}
//parrafos[max].innerHTML=num;