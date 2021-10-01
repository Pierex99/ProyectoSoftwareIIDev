var filasTabla = 0;
var montoTotal = 0;
const URL_BASE = "http://localhost:3000";
const divCardPrincipal = document.getElementById("cards");
const tableBody = document.getElementById("tableBody");
const labelMonto = document.getElementById("montoTotal");
var listaPaises;
var listaProductos;
var listaTipos;
var listaCategorias;
var montoTotal = 0;
var cantEntradas = 0;
var arregloProductosCC = [];

const armarCard = (producto) => {
    const divCards = document.getElementById('cards');

    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card mb-3');
    divCard.setAttribute('id', 'producto' + producto.id);
    divCard.setAttribute('categoria', producto.categoria);
    divCard.setAttribute('dia', producto.fecha);
    divCard.setAttribute('tipo', producto.tipo);

    var divFilaCard = document.createElement('div');
    divFilaCard.setAttribute('class', 'row card-body align-items-center');
    var divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'col-3');
    var divProducto = document.createElement('div');
    divProducto.innerHTML = producto.nombre;
    var divMonto = document.createElement('div');
    var spanSimbolo = document.createElement('span');
    spanSimbolo.innerHTML = "S/. "
    var spanMonto = document.createElement('span');
    spanMonto.innerHTML = producto.monto;
    var buttonProducto = document.createElement('button');
    buttonProducto.setAttribute('class', 'btn btn-primary mt-2');
    buttonProducto.innerHTML = "+";
    buttonProducto.setAttribute("idBoton", producto.id);
    buttonProducto.onclick = butAgregarProductoOnClick;
    var divImagen = document.createElement('div');
    divImagen.setAttribute('class', 'col-9');
    var img = document.createElement('img');
    img.setAttribute('class', 'img-fluid');
    img.setAttribute('src', "https://images.rappi.pe/products/97625-1560872039168.png?d=200x200&?d=1920xundefined&e=webp");


    divMonto.appendChild(spanSimbolo);
    divMonto.appendChild(spanMonto);
    divInfo.appendChild(divProducto);
    divInfo.appendChild(divMonto);
    divInfo.appendChild(buttonProducto);
    divImagen.appendChild(img);
    divFilaCard.appendChild(divInfo);
    divFilaCard.appendChild(divImagen);
    divCard.appendChild(divFilaCard);
    divCards.appendChild(divCard);
}

const cargarProductos = async () => {
    const resp = await fetch(`${URL_BASE}/producto`, { method: "GET" });
    const Data = await resp.json();
    
    for (e of Data.data) {
        armarCard(e);
        
    }
}

const butAgregarProductoOnClick = (e) => {
    var numID = e.target.getAttribute("idBoton");

    var producto = e.target.previousSibling.previousSibling;
    var cantidad = 1;
    var monto = e.target.previousSibling;

    var boolFila = document.getElementById("filaProducto" + numID);
    var tbody = document.getElementById('tbody');

    if (boolFila == null) {

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
        td3.innerHTML = monto.lastChild.innerHTML;

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

const cargarCategorias = async () => {
    const resp = await fetch(`${URL_BASE}/categoria`, { method: "GET" });
    const Data = await resp.json();
    const arregloCategorias = Data.data;

    for (var i = 0; i < arregloCategorias.length; i++) {
        var nuevaCategoria = document.createElement("option")
        nuevaCategoria.innerText = arregloCategorias[i].nombre;
        nuevaCategoria.setAttribute = ("id", arregloCategorias[i].id);
        document.getElementById("listaCategorias").appendChild(nuevaCategoria);
    }
}

var filtrarProductos = () => {
    var urlAEjecutar = `${URL_BASE}/producto`;

    var categoriaB = document.getElementById("listaCategorias").selectedIndex;
    if (categoriaB != 0) {
        urlAEjecutar += `?categoria=${categoriaB}`;
        //categoriaSeleccion = true
    };

    fetch(urlAEjecutar, {
        method: "GET"
    }).then((res) => {
        res.json().then((data) => {
            if (data.msg == "") {
                document.getElementById('cards').innerHTML = "";
                for (var ev of data.data) {
                    armarCard(ev);
                }
            }
        })
    })
}

const pagarProductos = async () => {
    var body1;
    var body2;

    body1 =
    {
        idCliente: parseInt(localStorage.getItem("idUsuario")),
        montoT: parseInt(montoTotal)
    }


    const resp1 = await fetch(`${URL_BASE}/pedido`,
        {
            method: "POST",
            body: JSON.stringify(body1),
            headers: { "Content-Type": "application/json" }
        });

    const Data1 = await resp1.json();
    const idPedidoGen = Data1.data.id;

    for (productoCC of arregloProductosCC) {
        body2 =
        {
            idPedido: idPedidoGen,
            idProducto: productoCC,
            cantidad: parseInt(document.getElementById("colProductoCant" + productoCC).innerText),
            montoP: parseInt(document.getElementById("colProductoMonto" + productoCC).innerText),
        }

        const resp2 = await fetch(`${URL_BASE}/producto_pedido`,
            {
                method: "POST",
                body: JSON.stringify(body2),
                headers: { "Content-Type": "application/json" }
            });

        localStorage.setItem("ultimoPedido", idPedidoGen);
        window.setTimeout(() => { location = "resumen_pedido.html" }, 3000);
    }
}

function convertDateFormat(string) {
    var info = string.split('-');
    return parseInt(info[1]) + '/' + parseInt(info[2]) + '/' + info[0];
}

const redireccionInicio = () => {
    location = "landing_page.html";
}

function main() {
    cargarCategorias();
    cargarProductos();
    document.getElementById("botonFiltrar").onclick = filtrarProductos;
    document.getElementById("botonPagar").onclick = pagarProductos;
    document.getElementById("logout").onclick = redireccionInicio;
}

window.onload = main;

