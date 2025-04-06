let fotos = ['myriam.jpg','pepe.jpg', 'daniel.jpg', 'cesar.jpg'];
let titulos = ['Myriam - Adj.', 'Pepe - JTP', 'Daniel - ADG', 'César - ADG'];

let zonaCards = document.getElementById('cards');

/*
    6.a) Determine qué estructura iterativa utilizará, 
    para recorrer ambos arreglos al mismo tiempo
*/
// Aquí reemplazar con la estructura iterativa, dejar llaves donde están {
        for (let i = 0; i < fotos.length; i++) {

zonaCards.innerHTML = zonaCards.innerHTML + 
    `<section class="card" style="width: 15rem;">
        <!--
            6.b) Aplique las clases de Bootstrap correspondientes para cards.  
        -->
        <figure>
            <img class="" src="../img/${fotos[i]}">
        </figure>
        <section class="">
            <!--
                6.c) Los h4 deben tener el texto centrado con clase de Boostrap.
            -->
            <h4 class="">${titulos[i]}</h4>
        </section>
    </section>`;
}