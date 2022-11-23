var valores = [true, 5, false, "hola", "adios", 2];
var mayor = "";

var bool1;
var bool2;

var num1;
var num2;

// 1. Determinar cual de los dos elementos de texto es mayor
for (let i in valores) {
    if (typeof valores[i] === 'string'){
        if(valores[i]>mayor){
            mayor = valores[i];
        }
    }
}

console.log(mayor);

// 2. Utilizando exclusivamente los dos valores booleanos del array, 
// determinar los operadores necesarios para obtener un resultado true y otro false
for (let i in valores) {
    if (typeof valores[i] === 'boolean'){
        if(bool1 === undefined){
            bool1 = valores[i];
        }else{
            bool2 = valores[i];
        }
    }
}

if(bool1 === bool2){
    console.log("Iguales");
    console.log(bool1);
    console.log(bool2);
}else{
    console.log("Diferentes");
    console.log(bool1);
    console.log(bool2); 
}

// 3. Determinar el resultado de las cinco operaciones matemáticas realizadas
// con los dos elementos númericos
for (let i in valores) {
    if (typeof valores[i] === 'number'){
        if(num1 === undefined){
            num1 = valores[i];
        }else{
            num2 = valores[i];
        }
    }
}

console.log("Suma:"+(num1+num2));
console.log("Resta:"+(num1-num2));
console.log("Multiplicación:"+(num1*num2));
console.log("División:"+(num1/num2));