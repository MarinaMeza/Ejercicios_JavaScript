window.onsubmit = function hola() {
    //document.write("hola");

    var numero1=parseInt(document.getElementById("numero1").value);
    var numero2=parseInt(document.getElementById("numero2").value);
    var resultado=0;
    var flag=0;
    var operacion=parseInt(document.querySelector('input[name="operacion"]:checked').value);

    switch(operacion){
        case 1:
            resultado=numero1+numero2;
            break;
        case 2:
            resultado=numero1-numero2;
            break;
        case 3:
            resultado=numero1*numero2;
            break;
        case 4:
            if(numero2==0)
            {
                document.write("Error. No puede dividirse por cero!");
                var flag=1;
                break;
            }else{
                resultado=numero1/numero2;
            }
            break;
    }

    if(flag==0){
        document.write("El resultado es: "+resultado);
    }
}