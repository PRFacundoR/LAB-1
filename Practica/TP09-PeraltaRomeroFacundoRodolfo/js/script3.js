
let formu= document.getElementById('formu2');

function contador (event){
let oracion=document.getElementById('coment').value.toLowerCase();

    event.preventDefault()
    let i = 0;
    let Va=0;
    let Ve=0;
    let Vi=0;
    let Vo=0;
    let Vu=0;
        while( i< oracion.length){
            

            if (oracion[i] === "a") {
                Va= Va + 1
            } else if (oracion[i] === "e") {
                Ve= Ve + 1
            }else if (oracion[i] === "i") {
                Vi= Vi + 1
            }else if (oracion[i] === "o") {
                Vo= Vo + 1
            }else if (oracion[i] === "u") {
                Vu= Vu + 1
            }
            i=i+1
                
        };    
        window.alert("cantidades de vocales en tu oración " + " cantidad de letras a=" + Va + " cantidad de letras e=" + Ve + " cantidad de letras i=" + Vi + " cantidad de letras o=" + Vo + " cantidad de letras u=" + Vu);
};


formu.addEventListener('submit', contador )