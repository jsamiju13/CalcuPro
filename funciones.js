let botonN1 = document.querySelector("#numero1");
let botonN2 = document.querySelector("#numero2");

let botonSuma = document.querySelector("#suma");
let botonResta = document.querySelector("#resta");
let botonMulti = document.querySelector("#multi");
let botonDivi = document.querySelector("#divi");

let botonHistoria = document.querySelector("#historia")

let mensaje = document.querySelector("#texto")

let botonAudio = document.querySelector("#audio")

let historial = []

botonN1.addEventListener("click", function(){

    botonAudio.play();
    botonN1.textContent =  parseFloat(prompt("Numero 1"));  

});

botonN2.addEventListener("click", function(){

    botonAudio.play();
    botonN2.textContent =  parseFloat(prompt("Numero 2"));

});

botonSuma.addEventListener("click", function(){
    calcular(1);
    botonAudio.play();

});

botonResta.addEventListener("click", function(){
    calcular(2);
    botonAudio.play();

});

botonMulti.addEventListener("click", function(){
    calcular(3);
    botonAudio.play();

});

botonDivi.addEventListener("click", function(){
    calcular(4);
    botonAudio.play();

});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

botonHistoria.addEventListener("click", function(){
    
    botonAudio.play();
    alert(historial)
   
});

function calcular(opcion){

    let num1 = parseFloat(botonN1.textContent);
    let num2 = parseFloat(botonN2.textContent);
    let res = 0;

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
    
    mensaje.textContent = res.toFixed(1);

    if (mensaje.textContent == "NaN"){
        alert("Algo me dice que te faltó algo")
    }else{
        if (mensaje.textContent == "Infinity"){
        alert("Hostia como que infinito :0")
        }else{
            historial.push(mensaje.textContent);
        }
    }

}