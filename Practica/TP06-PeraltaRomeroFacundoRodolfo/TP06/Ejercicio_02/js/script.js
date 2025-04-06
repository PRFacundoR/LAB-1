let formulario= document.getElementById('formu');
let nombre= document.getElementById('Name');
let DNI= document.getElementById('DocPer')

function generar(event) {
    event.preventDefault();

    document.getElementById('persona').innerHTML= nombre.value;
    document.getElementById('dni').innerHTML= DNI.value;

}

formulario.addEventListener('submit', generar);




