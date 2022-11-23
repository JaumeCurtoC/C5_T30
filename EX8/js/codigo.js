var num;

var valido = true;

function numero(){
    num = document.getElementById('num').value;

    valido = comprobarNum();

    if(valido){
        calcularResto();
    }
}

function comprobarNum(){
    if(num>0 && !Number.isNaN(num)){
        return true;
    }else{
        window.alert("Valor inválido");
        return false;
    }
}

function calcularResto(){
    if(num%2 == 0){
        window.alert("El número "+num+" es par.");
    }else{
        window.alert("El número "+num+" es impar.");
    }
}