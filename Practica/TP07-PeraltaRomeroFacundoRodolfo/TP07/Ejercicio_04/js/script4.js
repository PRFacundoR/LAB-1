let formulario=document.getElementById('formu');
let sabanas= document.getElementById('sabana');
let img= document.getElementById('imagen');

function cambiarSabana() {
    
    if (sabanas.value=='azul') {
        img.src="img/azul.webp";
        img.alt="sabána azul";
        
    } else if( sabanas.value== 'bordo'){
        img.src= "img/bordo.webp";
        img.alt="sabána bordo";
    } else if(sabanas.value== 'verde'){
        img.src= "img/verde.webp";
        img.alt="sabána verde";
    } else if(sabanas.value== 'gris'){
        img.src= "img/gris.webp" 
        img.alt="sabána gris";
    }else {
        img.src= "img/plata.webp";
        img.alt="sabána plateada";


    }
}

formulario.addEventListener('change', cambiarSabana)