var filasTabla = 0;
var montoTotal = 0;
const URL_BASE = "http://localhost:3000";
const divCardPrincipal = document.getElementById("cards");
const tableBody = document.getElementById("tableBody");
const labelMonto = document.getElementById("montoTotal");
var arregloProductosCC = [];

const armarCardProducto = (producto) =>{
    const divCards = document.getElementById('cards');

    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card mb-3');
    divCard.setAttribute('id', 'Producto' + producto.id);

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
    h5Titulo.innerHTML = producto.nombreproducto; //nombre producto
    var pText1 = document.createElement('p');
    pText1.setAttribute('class', 'card-text');
    pText1.innerHTML = "Costo de Envío: S/. " + producto.costoEnvio + ".00"
    var pText2 = document.createElement('p');
    pText2.setAttribute('class', 'card-text'); // precio
    var smallText1 = document.createElement('small');
    smallText1.innerHTML = producto.tiempoMin + " - " + producto.tiempoMax + " Minutos"
    smallText1.setAttribute('class', 'text-muted')
    var buttonEvento = document.createElement('button');
    buttonEvento.setAttribute('class', 'btn btn-primary mt-2');
    buttonEvento.innerHTML = "+";
    buttonEvento.setAttribute("idBoton", evento.id);
    buttonEvento.onclick = butAgregarEventoOnClick;

    divColumnaImagen.appendChild(imagenproducto);
    divCardBody.appendChild(h5Titulo);
    divCardBody.appendChild(pText1);
    pText2.appendChild(smallText1);
    divCardBody.appendChild(pText2);
    divCardBody.appendChild(buttonEvento);
    divColumnaDescripcion.appendChild(divCardBody);
    divEstructuraCard.appendChild(divColumnaImagen);
    divEstructuraCard.appendChild(divColumnaDescripcion);
    divCard.appendChild(divEstructuraCard);
    divCards.appendChild(divCard);
}

const butAgregarProductoOnClick = (e) => {
    var numID = e.target.getAttribute("idBoton");
    var producto = e.target.previousSibling.previousSibling.previousSibling;
    var cantidad = 1;
    var monto = e.target.previousSibling;
    var boolFila = document.getElementById("filaProducto" + numID);
    var tbody = document.getElementById('tbody');
    
    if (boolFila == null) {
        window.alert(filasTabla)
        var tr = document.createElement('tr');
        tr.setAttribute("id", "filaProducto" + numID);
        
        var td1 = document.createElement('td');
        td1.setAttribute("id", "colProductoNom" + numID);
        var td2 = document.createElement('td');
        td2.setAttribute("id", "colProductoCant" + numID);
        var td3 = document.createElement('td');
        td3.setAttribute("id", "colProductoMonto" + numID);
        
        td1.innerHTML = producto.innerHTML;
        td2.innerHTML = cantidad;
        //window.alert(monto.lastChild.innerText)
        //td3.innerHTML = monto.lastChild.innerHTML;
        
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        
        arregloProductosCC.push(numID);
        
    }
    else {
        var tempCant = parseInt(document.getElementById("colProductoCant" + numID).innerText);
        tempCant++;
        document.getElementById("colProductoCant" + numID).innerText = tempCant;

        var tempMonto = (monto.lastChild.innerHTML) * tempCant;
        document.getElementById("colProductoMonto" + numID).innerText = tempMonto;
    }

    //aumentar cantidad
    filasTabla++;
    document.getElementById('cantProductos').innerHTML = "(" + filasTabla + ")";
    
    //TODO: actualizar total a pagar (SUMA)
    montoTotal = parseInt(montoTotal) + parseInt(monto.lastChild.innerHTML);
    document.getElementById('totalPagar').innerHTML = "Total a pagar: S/. " + montoTotal;
    
}


const cargarProductos = async () => {
    const resp = await fetch(`${URL_BASE}/producto`, { method: "GET" });
    const Data = await resp.json();

    for (e of Data.data) {
        armarCardProducto(e);
    }
}

const redireccionLogin = () => {
    location = "login.html"; //falta crear pantalla login del mockup
}
const redireccionRegistro = () => {
    location = "registro.html"; //falta crear pantalla registro del mockup
}

function main() {
    cargarProductos()
    document.getElementById('but2').onclick = butAgregarProductoOnClick;
    //redirecciones
    document.getElementById("login").onclick = redireccionLogin;
    document.getElementById("register").onclick = redireccionRegistro;
}

window.onload = main;