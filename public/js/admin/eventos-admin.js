const URL_BASE = "http://localhost:3000";
var modal;
var eventoIdGlobal = null;

const modificarEventoOnClick = async (event) => 
{
    limpiarFormulario();

    modal.toggle();
    const evid = event.target.getAttribute("evid");
    eventoIdGlobal = evid;
    const resp = await fetch(`${URL_BASE}/evento/${evid}`, {method : 'GET'});

    const Data = await resp.json();

    if (Data.msg == "") 
    {
        var datosEvento = Data.data;
        document.getElementById("ev-nombre").value = datosEvento.nombre;
        document.getElementById("ev-monto").value = datosEvento.monto;
    }
};

const eliminarEventoOnclick = async (event) => 
{
    const evid = event.target.getAttribute("evid");

    const resp = await fetch(`${URL_BASE}/evento/${evid}`, {method : "DELETE"});
    const Data = await resp.json();

    if (Data.msg == "") 
    {
        cargarEventos();
    }else 
    {
        console.error(Data.msg);
    }
}

const armarFila = (evento) => 
{
    const tr = document.createElement('tr');
    const thId = document.createElement('th');
    const tdNombre = document.createElement('td');
    const tdMonto = document.createElement('td');
    const tdAcciones = document.createElement('td');

    thId.innerHTML = evento.id;
    thId.setAttribute("scope", "row");
    tdNombre.innerHTML = evento.nombre;
    tdMonto.innerHTML = evento.monto;


    butModificar = document.createElement('button')
    butModificar.setAttribute('class', 'btn btn-link btn-sm');
    butModificar.setAttribute('type', 'button');
    butModificar.innerHTML = "Modificar";
    butModificar.setAttribute("evid", evento.id);
    butModificar.addEventListener('click', modificarEventoOnClick);

    butEliminar = document.createElement('button')
    butEliminar.setAttribute('class', 'btn btn-link btn-sm');
    butEliminar.setAttribute('type', 'button');
    butEliminar.innerHTML = "Eliminar";
    butEliminar.setAttribute("evid", evento.id);
    butEliminar.addEventListener('click', eliminarEventoOnclick);

    tdAcciones.appendChild(butModificar);
    tdAcciones.appendChild(butEliminar);

    tr.appendChild(thId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdMonto);
    tr.appendChild(tdAcciones);

    return tr;
}

const cargarEventos = () => 
{
    fetch(`${URL_BASE}/evento`, {
        method : "GET"
    }).then( (res) => {
        res.json().then((data)=> {
            if (data.msg == "") {
                document.getElementById('eventos').innerHTML = "";
                for (var ev of data.data) 
                {
                    const tr = armarFila(ev);
                    document.getElementById('eventos').appendChild(tr);
                }
            }
        })
    })
}

const limpiarFormulario = () => 
{
    document.getElementById('ev-nombre').value = "";
    document.getElementById('ev-monto').value = "";
}

const butGuardarOnClick = () => 
{
    const evNombre = document.getElementById('ev-nombre').value;
    const evMonto = document.getElementById('ev-monto').value;

    var body;
    var tipoPeticion;

    if (eventoIdGlobal == null) 
     {
        // Registro de un nuevo recurso
        body = {
            nombre : evNombre,
            fecha: "",
            monto : evMonto,
            tipo: 0,
            categoria: 0
        }
        tipoPeticion = 'POST';
    }else 
    {
        // Modificacion de un recurso existente
        body = {
            id : eventoIdGlobal,
            nombre : evNombre,
            fecha: "",
            monto : evMonto,
            tipo: 0,
            categoria: 0
        }
        tipoPeticion = 'PUT';
    }


    fetch(`${URL_BASE}/evento`, {
        method : tipoPeticion,
        body : JSON.stringify(body),
        headers : {
            "Content-Type" : "application/json"
        }
    }).then((resp) => {
        resp.json().then((data)=> {
            if (data.msg == "") 
            {
                // Todo correcto
                console.log(data.data);
                modal.hide();
                limpiarFormulario();
                cargarEventos();
                eventoIdGlobal = null;
            }else 
            {
                // Error
                console.error(data.msg);
            }
        })
    })
}

const main = () => {
    modal = new bootstrap.Modal(document.getElementById('myModal'));

    document.getElementById('butNuevo').addEventListener("click", () => { 
        limpiarFormulario();       
        modal.toggle();
    });

    document.getElementById('butGuardar').addEventListener('click', butGuardarOnClick);

    cargarEventos();
}

window.addEventListener("load", main);