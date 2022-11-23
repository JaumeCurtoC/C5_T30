var text;

function texto(){
    text = document.getElementById('text').value;

    if(text == text.toUpperCase()){
        window.alert("La cadena esta formada solo por mayúsculas.");
    }else if(text == text.toLowerCase()){
        window.alert("La cadena esta formada solo por minúsculas.");
    }else{
        window.alert("La cadena esta formada por mayúsculas y minúsculas.");
    }
}