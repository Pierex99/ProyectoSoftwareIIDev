const URL_BASE = "http://localhost:3000";

const armarCardProducto = (producto) =>{
    const divCards = document.getElementById('cardsproductos');

    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card mb-3');
    divCard.setAttribute('id', 'evento' + producto.id);

    var divEstructuraCard = document.createElement('div');
    divEstructuraCard.setAttribute('class', 'row card-body align-items-center');

    var divColumnaImagen = document.createElement('div');
    divColumnaImagen.setAttribute('class', 'col-md-3');
    var imagenProducto = document.createElement('img');
    imagenProducto.setAttribute('class', 'img-fluid rounded mx-auto d-block');
    imagenProducto.setAttribute('src', 'https://cdn1.iconfinder.com/data/icons/farm-flat/64/stall-store-market-512.png');
    imagenProducto.setAttribute('alt', 'Market')

    var divColumnaDescripcion = document.createElement('div');
    divColumnaDescripcion.setAttribute('class', 'col-md-9');
    var divCardBody = document.createElement("div");
    divCardBody.setAttribute('class', 'card-body');
    var h5Titulo = document.createElement('h5');
    h5Titulo.setAttribute('class', 'card-title');
    h5Titulo.innerHTML = producto.nombreproducto;
    var pText1 = document.createElement('p');
    pText1.setAttribute('class', 'card-text');
    pText1.innerHTML = "Costo de Envío: S/. " + producto.costoEnvio + ".00"
    var pText2 = document.createElement('p');
    pText2.setAttribute('class', 'card-text');
    var smallText1 = document.createElement('small');
    smallText1.innerHTML = producto.tiempoMin + " - " + producto.tiempoMax + " Minutos"
    smallText1.setAttribute('class', 'text-muted')

    divColumnaImagen.appendChild(imagenproducto);
    divCardBody.appendChild(h5Titulo);
    divCardBody.appendChild(pText1);
    pText2.appendChild(smallText1);
    divCardBody.appendChild(pText2);
    divColumnaDescripcion.appendChild(divCardBody);
    divEstructuraCard.appendChild(divColumnaImagen);
    divEstructuraCard.appendChild(divColumnaDescripcion);
    divCard.appendChild(divEstructuraCard);
    divCards.appendChild(divCard);
}

const cargarproductos = async () => {
    const resp = await fetch(`${URL_BASE}/producto`, { method: "GET" });
    const Data = await resp.json();

    for (e of Data.data) {
        armarCardProducto(e);
    }
}

function main() {
    cargarproductos()
}

window.addEventListener("load", main);