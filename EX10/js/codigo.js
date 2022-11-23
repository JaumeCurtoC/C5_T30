var text;
var rev = "";

function ketek(){
    text = document.getElementById('text').value;
    text = text.toLowerCase();
    rev = "";

    reverseStr();

    if(text == rev){
        window.alert(text + " és un palíndromo.");
    }else{
        window.alert(text + " no és un palíndromo.");
    }

    console.log(text);
    console.log(rev);
}

function reverseStr(){
    for (let i = text.length -1; i >=0; i--) {
        rev += text[i];
    }
}