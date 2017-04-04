window.onload = function meses()
{
    var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    for(var i=0;i<12;i++)
    {
        document.write((i+1)+" - "+meses[i]+"<br>");
    }
}