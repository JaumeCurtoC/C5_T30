var num;

var valido = true;

function factorial(){
    num = document.getElementById('num').value;

    valido = comprobarNum();

    if(valido){
        calcularFactorial();
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

function calcularFactorial(){
    var f = num;
    for (let i = 1; i < num; i++) {
        f = f*(num-i);
        console.log(f);
    }
    window.alert(f);
}