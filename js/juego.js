var palabraElegida;
var contadorError=0;
var contador=0;
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var mensaje= document.querySelector("#msg");
var letra = document.querySelector("#letras");     
var guiones = document.querySelector("#guiones");        
var smg = document.getElementById("leyendaPerdida");
var error = document.querySelector("#errorLetras");
var listado = [];
var listadoError=[];
var listadoLetrasIngresadas = [];
var nuevoJuego = document.querySelector("#btnNuevo");
var juegoTerminado = false;


/*Pagina Juego */
function cargarJuego(){
         //agregamos la palabra cargada ...
       if(localStorage.getItem('palabra') != null){
         listaPalabras.push(localStorage.getItem('palabra'));
         console.log(listaPalabras);
         
         palabraAlatoria();
 
         for(i=0; i<palabraElegida.length;i++){
           letra.innerHTML += `<span id ="spanLetra" class="invisible trud">${palabraElegida[i]}</span>`;
           guiones.innerHTML += `<span class="trud line"></span>`;
           listado.push(palabraElegida[i]);        
       };   
       //console.log(palabraElegida);
        //validar tecla ingresada siempre que no haya terminado el juego....
       document.addEventListener("keydown", function(event) { 
           var teclaPresionada = event; 
          if(!juegoTerminado){ 
           if(!listadoLetrasIngresadas.includes(teclaPresionada.key.toUpperCase())){
            // console.log(teclaPresionada.key.toUpperCase());
             listadoLetrasIngresadas.push(teclaPresionada.key.toUpperCase());     
             validar(teclaPresionada.key.toUpperCase()); 
           }   
          }         
       }); 
 
       //validar letra ingresada 
       function validar(letra){                 
           if(letras.includes(letra)){  
              if(listado.includes(letra)){
              // console.log("letra incluida en la palabra");  
         var invisibles = document.querySelectorAll(".invisible");  
           for(i=0; i<invisibles.length;i++){
                if(invisibles[i].textContent== letra){
                    invisibles[i].classList.remove("invisible");     
                    invisibles = document.querySelectorAll(".invisible"); 
                  // console.log("Restan adivinar "+invisibles.length+ " letras");  
                    if(invisibles.length == 0){     
                     console.log("ADIVINASTE!");
                     mensaje.style.display = "flex";
                      mensaje.classList.add('ganaste');
                      mensaje.classList.add('final');
                      mensaje.textContent =`GANASTE!!!!`;
                      juegoTerminado=true;    
                  };
             };
           }
              } else{
              //letra no forma parte de la palabra
               if(!listadoError.includes(letra)){
                 listadoError.push(letra);
                 contadorError++;
                 //dibujo ahorcado
                dibujar(contadorError);
                 if(contadorError < 10){
                     error.innerHTML += letra + " ";              
                 }else{
                   error.style.display ="none";
                   smg.style.display = "flex";
                   smg.style.color = "red";
                   smg.textContent = `La palabra secreta era: ${palabraElegida}`
                  mensaje.classList.add('perdiste');
                  mensaje.classList.add('final');
                  mensaje.textContent =`PERDISTE`;  
                  juegoTerminado=true;     
                  mensaje.style.display = "flex";
                 };
               }  
              }            
           }
           else{
             alert("Solo se permiten LETRAS");
           };
       };

 //elegir palabra aleatoria
 function palabraAlatoria(){
   palabraElegida = listaPalabras[Math.floor(Math.random() * listaPalabras.length)]; 
   return palabraElegida;
 }
 
//nuevo juego
 nuevoJuego.addEventListener("click", function(){     
     window.location.reload();          
 });
 
 //funcion dibujar ahorcado
 function dibujar( contadorError){    
     if(contadorError == 1){
       pincel.strokeStyle = '#CC6666';
       pincel.lineWidth =15;   
       pincel.beginPath();
       pincel.moveTo(0,300);
       pincel.lineTo(250,300);
       pincel.stroke();      
     }
     else if(contadorError== 2){
       pincel.beginPath();
       pincel.moveTo(50,50);
       pincel.lineTo(50,300);
       pincel.stroke();  
     }
     else if(contadorError == 3){
       pincel.beginPath();
       pincel.moveTo(50,50);
       pincel.lineTo(200,50);
       pincel.stroke();      
     }
     else if(contadorError == 4){
       pincel.beginPath();
       pincel.moveTo(200,50);
       pincel.lineTo(200,100);
       pincel.stroke();          
     }
     else if(contadorError == 5){
       pincel.strokeStyle = "black";
       pincel.lineWidth = 6;  
       pincel.beginPath();
       pincel.arc(200,122,22,0,2*3.1416);
       pincel.stroke();         
     }
     else if(contadorError == 6){
       pincel.lineWidth = 6;  
       pincel.moveTo(200,145);
       pincel.lineTo(200,210);
       pincel.stroke();        
     }
     else if(contadorError == 7){
       pincel.lineWidth = 6;  
       pincel.moveTo(200,170);
       pincel.lineTo(240,185);
       pincel.stroke();      
     }
     else if(contadorError == 8){
       pincel.lineWidth = 6;  
       pincel.moveTo(200,170);
       pincel.lineTo(160,185);
       pincel.stroke();          
     }
     else if(contadorError == 9){
       pincel.lineWidth = 6;  
       pincel.moveTo(200,210);
       pincel.lineTo(240,235);
       pincel.stroke();        
     }
     else if(contadorError == 10){
       pincel.lineWidth = 6; 
       pincel.moveTo(200,210);
       pincel.lineTo(160,235);
       pincel.stroke();
       //dibujamos la cara...
       //ojo izq.
       pincel.lineWidth = 1;  
       pincel.beginPath();
       pincel.arc(190,115,2,0,2*3.1416);
       pincel.stroke(); 
       //ojo der
       pincel.lineWidth = 1;  
       pincel.beginPath();
       pincel.arc(210,115,2,0,2*3.1416);
       pincel.stroke(); 
       //boca
       pincel.lineWidth = 1;  
       pincel.strokeStyle = "red";
       pincel.beginPath();
       pincel.arc(200,130,4,0,2*3.1416);
       pincel.stroke();     
     }
    }
  }
}
