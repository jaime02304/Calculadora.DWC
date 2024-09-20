function operarNumeros(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2=Number(document.getElementById("numero2").value);
    let operador = document.getElementById("operador").value;
    let resultado = 0;
    if(numero1===null|| numero2===null||operador===null){
        alert("algunas de las opciones de operador o dar un numero no esta puesta");
        console.log(numero1);
        console.log(numero2);
        console.log(operador);
    }else{
        console.log(numero1);
        console.log(numero2);
        console.log(operador);
        if(operador=="1"){
            resultado=numero1+numero2;
            document.getElementById("resultado").innerHTML=resultado;
        }else if(operador=="2"){
            resultado= numero1-numero2;
            document.getElementById("resultado").innerHTML=resultado;
        }else if(operador=="3"){
            resultado= numero1*numero2;
            document.getElementById("resultado").innerHTML=resultado;
        }else if(operador=="4"){
            resultado= numero1/numero2;
            document.getElementById("resultado").innerHTML=resultado;
        }else{
            alert("No has elegido ningun tipo de operador");
        }
        
    }

}


