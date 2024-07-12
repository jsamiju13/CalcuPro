//APERTURA DE VARIABLES---------------

//Referencias de los contenedores de numeros-----
let botonN1 = document.querySelector("#numero1");
let botonN2 = document.querySelector("#numero2");
//---------------

//referencias de los operadores-----
let botonSuma = document.querySelector("#suma");
let botonResta = document.querySelector("#resta");
let botonMulti = document.querySelector("#multi");
let botonDivi = document.querySelector("#divi");
//---------------

//referencia al historial-----
let botonHistoria = document.querySelector("#historia")
//---------------

//referencia al texto de resultado-----
let mensaje = document.querySelector("#texto")
//---------------

//referencia al audio-----
let botonAudio = document.querySelector("#audio")
//---------------

//arreglo del historial-----
let historial = []
//---------------

//---------------------------------------------

//EVENTOS DE BOTONES---------------

//Boton del primer contenedor para número-----

botonN1.addEventListener("click", function(){

    botonAudio.play();
    botonN1.textContent =  parseFloat(prompt("Introduce un número cualquiera"));  

});

//---------------

//Boton del segundo contenedor para número-----

botonN2.addEventListener("click", function(){

    botonAudio.play();
    botonN2.textContent =  parseFloat(prompt("Introduce un número cualquiera"));

});

//---------------

//boton para sumar-----

botonSuma.addEventListener("click", function(){
    calcular(1);
    botonAudio.play();

});

//---------------

//boton para restar-----

botonResta.addEventListener("click", function(){
    calcular(2);
    botonAudio.play();

});

//---------------

//boton para multiplicar-----

botonMulti.addEventListener("click", function(){
    calcular(3);
    botonAudio.play();

});

//---------------

//boton para dividir-----

botonDivi.addEventListener("click", function(){
    calcular(4);
    botonAudio.play();

});

//---------------

//---------------------------------------------

//ZONA DE FUNCIONES---------------
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//Boton del Historial-----
botonHistoria.addEventListener("click", function(){

    botonAudio.play();
    alert(historial)
   
});

//---------------

function calcular(opcion){

    let num1 = parseFloat(botonN1.textContent);
    let num2 = parseFloat(botonN2.textContent);
    let res = 0;

    //Motor de la calculadora-----
    if (opcion == 1){
        res = (+num1+ +num2)
    }else{
        if (opcion == 2){
            res = num1-num2
        }else{
            if (opcion == 3){
                res = num1*num2
            }else{
                if (opcion == 4){
                    res = num1/num2
                }
            }
        }
    }
    //---------------
    
    //El resultado es colocado en el contenedor del mensaje y sus decimales redondeados a 1-----
    mensaje.textContent = res.toFixed(1);
    //---------------

    //zona de validado-----
    if (mensaje.textContent == "NaN"){
        alert("Algo me dice que te faltó algo")
    }else{
        if (mensaje.textContent == "Infinity"){
        alert("Hostia como que infinito :0")
        }else{
            historial.push(mensaje.textContent);
        }
    }
    //---------------

    //---------------------------------------------
}