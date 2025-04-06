let Form= document.getElementById('form1');
let dinero= document.getElementById('monto');
let divisor= document.getElementById('cuotas');

function calcular(event){
    event.preventDefault();

    let monto1= parseFloat(dinero.value)
    let cuota1= parseFloat(divisor.value)
    let valorCuota= monto1/cuota1

    document.getElementById('Total').innerHTML=valorCuota
}

Form.addEventListener('submit', calcular);