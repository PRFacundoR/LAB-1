let IMG= document.getElementById('imagen');
let CONTRA= document.getElementById('contra');





function mostrarContra(){
    if (CONTRA.type=='password') {
        CONTRA.type='text';
        IMG.src="img/openeye.png";
    }else{
        CONTRA.type='password';
        IMG.src="img/closeeye.png";
    }
};
IMG.addEventListener('mousedown', mostrarContra);
IMG.addEventListener('mouseup', mostrarContra);
