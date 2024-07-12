let botonN1 = document.querySelector("#numero1");
let botonN2 = document.querySelector("#numero2");

let botonSuma = document.querySelector("#suma");
let botonResta = document.querySelector("#resta");
let botonMulti = document.querySelector("#multi");
let botonDivi = document.querySelector("#divi");

let mensaje = document.querySelector("#texto")

botonN1.addEventListener("click", function(){

    botonN1.textContent =  parseFloat(prompt("Numero 1"));

});

botonN2.addEventListener("click", function(){

    botonN2.textContent =  parseFloat(prompt("Numero 2"));

});

botonSuma.addEventListener("click", function(){

    calcular(1);

});

botonResta.addEventListener("click", function(){

    calcular(2);

});

botonMulti.addEventListener("click", function(){

    calcular(3);

});

botonDivi.addEventListener("click", function(){

    calcular(4);

});


function calcular(opcion){

    let num1 = parseFloat(botonN1.textContent);
    let num2 = (botonN2.textContent);
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
    
    mensaje.textContent = res;

    if (mensaje.textContent == "NaN"){
        alert("Algo me dice que te faltó algo")
    }

    if (mensaje.textContent == "Infinity"){
        alert("Hostia como que infinito :0")
    }
    
}