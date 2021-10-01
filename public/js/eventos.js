var filasTabla = 0;
var montoTotal = 0;
const URL_BASE = "http://localhost:3000";
const divCardPrincipal = document.getElementById("cards");
const tableBody = document.getElementById("tableBody");
const labelMonto = document.getElementById("montoTotal");
var listaPaises;
var listaEventos;
var listaTipos;
var listaCategorias;
var montoTotal = 0;
var cantEntradas = 0;
var arregloEventosCC = [];

const armarCard = (evento) => {
    const divCards = document.getElementById('cards');

    var divCard = document.createElement('div');
    divCard.setAttribute('class', 'card mb-3');
    divCard.setAttribute('id', 'evento' + evento.id);
    divCard.setAttribute('categoria', evento.categoria);
    divCard.setAttribute('dia', evento.fecha);
    divCard.setAttribute('tipo', evento.tipo);

    var divFilaCard = document.createElement('div');
    divFilaCard.setAttribute('class', 'row card-body align-items-center');
    var divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'col-3');
    var divEvento = document.createElement('div');
    divEvento.innerHTML = evento.nombre;
    var divMonto = document.createElement('div');
    var spanSimbolo = document.createElement('span');
    spanSimbolo.innerHTML = "S/. "
    var spanMonto = document.createElement('span');
    spanMonto.innerHTML = evento.monto;
    var buttonEvento = document.createElement('button');
    buttonEvento.setAttribute('class', 'btn btn-primary mt-2');
    buttonEvento.innerHTML = "+";
    buttonEvento.setAttribute("idBoton", evento.id);
    buttonEvento.onclick = butAgregarEventoOnClick;
    var divImagen = document.createElement('div');
    divImagen.setAttribute('class', 'col-9');
    var img = document.createElement('img');
    img.setAttribute('class', 'img-fluid');
    img.setAttribute('src', "https://www.centroculturalulima.com/wp/wp-content/uploads/2016/06/banner-1-e1468508782721.jpg");


    divMonto.appendChild(spanSimbolo);
    divMonto.appendChild(spanMonto);
    divInfo.appendChild(divEvento);
    divInfo.appendChild(divMonto);
    divInfo.appendChild(buttonEvento);
    divImagen.appendChild(img);
    divFilaCard.appendChild(divInfo);
    divFilaCard.appendChild(divImagen);
    divCard.appendChild(divFilaCard);
    divCards.appendChild(divCard);
}

const cargarEventos = async () => {
    const resp = await fetch(`${URL_BASE}/evento`, { method: "GET" });
    const Data = await resp.json();

    for (e of Data.data) {
        armarCard(e);
    }
}

const butAgregarEventoOnClick = (e) => {
    var numID = e.target.getAttribute("idBoton");

    var evento = e.target.previousSibling.previousSibling;
    var cantidad = 1;
    var monto = e.target.previousSibling;

    var boolFila = document.getElementById("filaEvento" + numID);
    var tbody = document.getElementById('tbody');

    if (boolFila == null) {

        var tr = document.createElement('tr');
        tr.setAttribute("id", "filaEvento" + numID);

        var td1 = document.createElement('td');
        td1.setAttribute("id", "colEventoNom" + numID);
        var td2 = document.createElement('td');
        td2.setAttribute("id", "colEventoCant" + numID);
        var td3 = document.createElement('td');
        td3.setAttribute("id", "colEventoMonto" + numID);

        td1.innerHTML = evento.innerHTML;
        td2.innerHTML = cantidad;
        td3.innerHTML = monto.lastChild.innerHTML;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        arregloEventosCC.push(numID);
    }
    else {
        var tempCant = parseInt(document.getElementById("colEventoCant" + numID).innerText);
        tempCant++;
        document.getElementById("colEventoCant" + numID).innerText = tempCant;

        var tempMonto = (monto.lastChild.innerHTML) * tempCant;
        document.getElementById("colEventoMonto" + numID).innerText = tempMonto;
    }

    //aumentar cantidad
    filasTabla++;
    document.getElementById('cantProductos').innerHTML = "(" + filasTabla + ")";

    //TODO: actualizar total a pagar (SUMA)
    montoTotal = parseInt(montoTotal) + parseInt(monto.lastChild.innerHTML);
    document.getElementById('totalPagar').innerHTML = "Total a pagar: S/. " + montoTotal;
}

const cargarTipos = async () => {
    const resp = await fetch(`${URL_BASE}/tipo`, { method: "GET" });
    const Data = await resp.json();
    const arregloTipos = Data.data;

    for (var i = 0; i < arregloTipos.length; i++) {
        var nuevoTipo = document.createElement("option")
        nuevoTipo.innerText = arregloTipos[i].nombre;
        nuevoTipo.setAttribute = ("id", arregloTipos[i].id);
        document.getElementById("listaTipos").appendChild(nuevoTipo);
    }
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

var filtrarEventos = () => {
    var urlAEjecutar = `${URL_BASE}/evento`;

    /*var fechaSeleccion = false;
    var tipoSeleccion = false;
    var categoriaSeleccion = false;*/

    var fechaB = convertDateFormat(document.getElementById("inputFecha").value);
    if (fechaB != "undefined/undefined/" && fechaB != "NaN/NaN/") {
        urlAEjecutar += `?fecha=${fechaB}`;
        //fechaSeleccion = true
    };
    //console.log("la fecha "+fechaB);
    var tipoB = document.getElementById("listaTipos").selectedIndex;
    if (tipoB != 0) {
        urlAEjecutar += `?tipo=${tipoB}`;
        //tipoSeleccion = true
    };
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

    /*for (var i = 0; i < arregloEventos.length; i++)
    {
        var cardTemp = document.getElementById("evento"+arregloEventos[i].id);
        
        if(fechaSeleccion && cardTemp.getAttribute("dia") != fechaB ||
            tipoSeleccion && parseInt(cardTemp.getAttribute("tipo")) != parseInt(tipoB) ||
            categoriaSeleccion && parseInt(cardTemp.getAttribute("categoria")) != parseInt(categoriaB)){
            //OCULTAR
            cardTemp.style.display = "none";
        }else{
            //MOSTRAR
            cardTemp.style.display = "";
        }
    }*/
}

const pagarEventos = async () => {
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

    for (eventoCC of arregloEventosCC) {
        body2 =
        {
            idPedido: idPedidoGen,
            idEvento: eventoCC,
            cantidad: parseInt(document.getElementById("colEventoCant" + eventoCC).innerText),
            montoP: parseInt(document.getElementById("colEventoMonto" + eventoCC).innerText),
        }

        const resp2 = await fetch(`${URL_BASE}/evento_pedido`,
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
    cargarTipos();
    cargarCategorias();
    cargarEventos();
    document.getElementById("botonFiltrar").onclick = filtrarEventos;
    document.getElementById("botonPagar").onclick = pagarEventos;
    document.getElementById("logout").onclick = redireccionInicio;
}

window.onload = main;

