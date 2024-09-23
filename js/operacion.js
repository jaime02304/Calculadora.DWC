var arrayResultado = [];
function operarNumeros() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let operador = document.getElementById("operador").value;
  let resultado = 0;
  let contenidoLista = "";
  if (numero1 === null || numero2 === null || operador === null) {
    alert("algunas de las opciones de operador o dar un numero no esta puesta");
  } else {
    if (operador == "1") {
      operador = "+";
      resultado = numero1 + numero2;
      document.getElementById("resultado").innerHTML = resultado;
    } else if (operador == "2") {
      operador = "-";
      resultado = numero1 - numero2;
      document.getElementById("resultado").innerHTML = resultado;
    } else if (operador == "3") {
      operador = "*";
      resultado = numero1 * numero2;
      document.getElementById("resultado").innerHTML = resultado;
    } else if (operador == "4") {
      operador = "/";
      resultado = numero1 / numero2;
      document.getElementById("resultado").innerHTML = resultado;
    } else {
      alert("No has elegido ningun tipo de operador");
    }
    mostrarLista(numero1,operador,numero2,resultado,contenidoLista);
  }
}

function mostrarLista(n1,op,n2,res,contenidoL){
    arrayResultado.push(n1 + op + n2 + "=" + res);
    for (let i = 0; i < arrayResultado.length; i++) {
      contenidoL +=
        "<li class=list-group-item text-center>" + arrayResultado[i] + "<br>";
    }
    document.querySelector("#listaPantalla").innerHTML=contenidoL;
}
