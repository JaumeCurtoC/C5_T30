var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N',
'J','Z','S','Q','V','H','L','C','K','E','T'];

var dni;
var letra;

var valido = true;

function comprobarDNI(){
    dni = document.getElementById('dni').value;
    letra = document.getElementById('letra').value;
    letra = letra.toUpperCase();
    
    valido = comprobarNum();

    if(valido){
        comprobarLetra();
    }

    console.log(dni);
    console.log(letra);
    console.log(valido);
}

function comprobarNum(){
    if(dni<0 || dni > 99999999){
        window.alert("Número de DNI inválido");
        return false;
    }else{
        return true;
    }
}

function comprobarLetra(){
    var lg = dni%23;
    if(letra == letras[lg]){
        window.alert("DNI correcto");
    }else{
        window.alert("La letra introducida no es correcta");
    }
}