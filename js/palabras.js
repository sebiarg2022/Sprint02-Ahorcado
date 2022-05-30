var listaPalabras = ["JAVA","HTML","PYTHON","ARGENTO","ROSA","GATO","CASA","ALMOHADON"];
var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"] //lista de letras válidas
var textoIngresado = document.querySelector("#textoIngresar");
var condicion = document.querySelector(".leyenda");


//validar input solo minusculas
function soloLetrasMinusculas(e) {
 
    textoIngresado.focus();
    key = e.keyCode || e.which;
   // key =(e.keyCode ? e.keyCode : e.which);
  
    if (key >= 97 && key <= 122 || key >= 65 && key <= 90 ){
     
      if(textoIngresado.value.length>7) 
      {
        cambiosCondicion(condicion);
        return false;
      }
      textoIngresado.value.toUpperCase();
     
    } else {
      cambiosCondicion(condicion);
      return false;
    }
  }
  
  
  
  
  function cambiosCondicion(a){
    a.style.color = "red";
      setTimeout("deshacerCambios()", 800);
  }
  
  function deshacerCambios() {
    condicion.style.color = "black";
  }
  
  
  
  //btn Guardar
  function guardarTexto() {
    if (textoIngresado.value.length == 0) {
    //  alert("No hay ninguna palabra ingresada");
      return false;
    }
   
        if(listaPalabras.indexOf(textoIngresado.value.toUpperCase())!==-1){
          alert("La palabra ingresada ya existe, ingrese una distinta");
        // console.log("iguales");
         textoIngresado.value = "";
         textoIngresado.focus();
         return false;
       }
       else{
        listaPalabras.push(textoIngresado.value.toUpperCase());
       // console.log(listaPalabras);
         //guardar palabra e ir a jugar.html
        localStorage.setItem('palabra',textoIngresado.value.toUpperCase());
         window.location.href='./jugar.html';
  
       }
      } 