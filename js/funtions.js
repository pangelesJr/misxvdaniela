var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

function pauseVid() { 
  vid.pause();
}

var boton = document.getElementById("banco");
boton.addEventListener("click", copiarAlPortapapeles, false);
function copiarAlPortapapeles() {
  //var enlace = document.getElementById("enlace");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", "4152313942377560");
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Número de tarjeta copiado al portapapeles!");
}

