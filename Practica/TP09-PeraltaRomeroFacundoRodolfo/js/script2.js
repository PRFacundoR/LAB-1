let GS=40;
let AS=30;
let ES= 20;
let monto=0
let vuelto=0
let RG=0
let RA=0
let RE=0

const GP= 1250;
const AP= 700;
const EP= 1500;

let simu=document.getElementById('simulacion');

function maquina(event){
    event.preventDefault();
    while (monto < 50000) {
        let dinero= parseFloat(window.prompt('Ingrese el dinero'));

        if (isNaN(dinero) || dinero < AP) {
            window.alert('Por favor, ingrese un valor numérico válido para el dinero.');
            }
       
        producto= window.prompt('Eliga el producto, 1: gaseosa; 2: energizante; 3:agua');
            if (producto == 'gaseosa' && GS >= 0 && dinero >= GP) {
                GS=GS-1
                monto= monto + GP
                vuelto = dinero - GP 
                RG= RG+ GP
                window.alert(`Toma una gaseosa ,  Vuelto: ${vuelto}`);
                    if( GS == 0){
                        vuelto =  GP
                        window.alert(`Ya no quedan gaseosas eliga otro producto le devolvemos el dinero ,  Vuelto: ${vuelto}`);
                    }
            } else if (producto == 'agua' && AS >= 0 && dinero >= AP) {
                AS=AS-1
                monto= monto + AP
                vuelto = dinero - AP 
                RA= RA+ AP
                window.alert(`Toma un agua,  Vuelto: ${vuelto}`);
                    if( AS == 0){
                        vuelto =  AP
                        window.alert(`Ya no quedan aguas eliga otro producto, le devolvemos el dinero ,  Vuelto: ${vuelto}`);
                    }
            } else if (producto == 'energizante' && ES >= 0 && dinero >= EP) {
                ES=ES-1
                monto= monto + EP
                vuelto = dinero - EP 
                RE= RE+ EP
                window.alert(`Toma un energizante ,  Vuelto: ${vuelto}`);
                    if( ES == 0){
                        vuelto =  EP
                        window.alert(`Ya no quedan energizantes eliga otro producto, le devolmemos el dinero ,  Vuelto: ${vuelto}`);
                    }
            }else{
                window.alert('Producto no válido, agotado o dinero insuficiente. Intente de nuevo.');
            }
    

     }; 

     

        window.alert( 'La máquina necesita mantenimiento. ' +
                 'La recaudación de Gaseosa fue: ' + RG + '. ' +
                 'La recaudación de Agua fue: ' + RA + '. ' +
                 'La recaudación de Energizante fue: ' + RE + '. ' +
                 'Monto total acumulado: ' + monto);

     
};

simu.addEventListener( 'submit', maquina)