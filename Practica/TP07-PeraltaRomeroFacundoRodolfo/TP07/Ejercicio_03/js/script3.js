 let opcIdm= document.getElementById('idioma');


function cambiarIdioma(event){
    event.preventDefault();

    if (opcIdm.value === "ingles") {

        document.getElementById('res').innerHTML = "Register"
        document.getElementById('idomas').innerHTML = "Lenguage"
        document.getElementById('label-usr').innerHTML = "User";
        document.getElementById('label-password1').innerHTML = "Password";
        document.getElementById('label-password2').innerHTML = "Repeat Password";
        document.getElementById('label-tercon').innerHTML = "I accept the terms and conditions";
        document.getElementById('enviar').value = "Confirm"

    } else if (opcIdm.value === "aleman") {

        document.getElementById('res').innerHTML = "Aufzeichnen"
        document.getElementById('idomas').innerHTML = "Sprache";
        document.getElementById('label-usr').innerHTML = "Benutzername";
        document.getElementById('label-password1').innerHTML = "Passwort";
        document.getElementById('label-password2').innerHTML = "Passwort wiederholen";
        document.getElementById('label-tercon').innerHTML = "Ich akzeptiere die Allgemeinen Geschäftsbedingungen";
        document.getElementById('enviar').value = "Einreichen";

    } else {

        document.getElementById('res').innerHTML = "Registro"
        document.getElementById('idomas').innerHTML = "Idioma";
        document.getElementById('label-usr').innerHTML = "Usuario";
        document.getElementById('label-password1').innerHTML = "Contraseña";
        document.getElementById('label-password2').innerHTML = "Repetir contraseña";
        document.getElementById('label-tercon').innerHTML = "Acepto los términos y condiciones";
        document.getElementById('enviar').value = "Enviar";
    };


};

opcIdm.addEventListener('change', cambiarIdioma);



function controlPass(event){

event.preventDefault();
let Password1= document.getElementById('password1').value;
let Password2= document.getElementById('password2').value;
let term= document.getElementById('tercon')

if (Password1 !== Password2 ) {
    
    if (opcIdm.value === "ingles") {
        document.getElementById('control').innerHTML = 'The passwords are different';
    } else if (opcIdm.value === "aleman") {
        document.getElementById('control').innerHTML = 'Die Passwörter sind unterschiedlich';
    } else {
        document.getElementById('control').innerHTML = 'Las contraseñas son distintas';
    }
 } else if(!term.checked && opcIdm.value=== "español"){
    document.getElementById('control').innerHTML = 'Debe aceptar los términos y condiciones';
 } else if(!term.checked && opcIdm.value=== "ingles"){
    document.getElementById('control').innerHTML = 'You must accept the terms and conditions';
 } else if(!term.checked && opcIdm.value=== "aleman"){
    document.getElementById('control').innerHTML = 'Du musst die Geschäftsbedingungen akzeptieren';
 }

else {
    document.getElementById('formu').submit();
}

};

document.getElementById('formu').addEventListener('submit', controlPass);

