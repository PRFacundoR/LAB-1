/* 1-a) Complete la función CompararCorreos, de modo que:
    si las contraseñas son distintas, muestre el mensaje
    'Las contraseñas deben ser iguales', 
    sino no muestre nada (el párrafo debe quedar sin texto en ese caso)
*/

function compararCorreos (event) {
    /* completar */
    event.preventDefault();

    let pass =document.getElementById('lblContrasena').value ;
    let passConfirm = document.getElementById('lblConfirmarContrasena').value;

    if (pass !== passConfirm) {
        miAviso.innerHTML="las contraseñas deben ser iguales"
        
    }else{
        miAviso.innerHTML = ""
    };


};

let miAviso = document.getElementById('avisos');
let miFormu = document.getElementById('formularioRegistro');

/* 1-b) Agregue a miFormu un 'escuchador' de eventos, 
que cuando se produzca el evento submit, reaccione con la función compararCorreos */
miFormu.addEventListener('submit', compararCorreos)
