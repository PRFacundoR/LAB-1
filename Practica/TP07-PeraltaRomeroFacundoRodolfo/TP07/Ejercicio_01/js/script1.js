let Boton=document.getElementById('oscuro');

function cambiarColor(){
    if(Boton.checked){
            document.body.style.background='#000000';
            document.body.style.color='#FFFFFF';
}else{
            document.body.style.background='#FFFFFF';
            document.body.style.color='#000000';

}
};

Boton.addEventListener('change', cambiarColor);




