let tanque= 50000;
let consumo= 0;
let viajes=0
const alarma= 5000;

while (alarma < tanque ) {
    consumo=window.prompt('ingrese el consumo de cobustible en Cm³');

    tanque=tanque -parseFloat(consumo);

    viajes= viajes+1;

    if (isNaN(consumo)) {
        window.alert('Ingrese un numero');
    }else if(tanque === alarma ){
        window.alert('Debe cargar el tanque y le queda ' + tanque + "cm³"+ " y realizaste "  + viajes + " viajes" );
        
    }else{}


};

