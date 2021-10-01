const URL_BASE = "http://localhost:3000";
const mensajeSR = document.getElementById('mensajeSR');
const mensajeE = document.getElementById('mensajeE');
const botonC = document.getElementById('botonC');
const botonR = document.getElementById('botonR');
const botonCR = document.getElementById('botonCR');
const botonIS = document.getElementById('botonIS');

const cargarImagenesBanner = async () =>
{
    const resp = await fetch(`${URL_BASE}/banner`, {method : "GET"});
    const Data = await resp.json();
    const arregloBanner = Data.data;
    
    for (var i = 0; i < arregloBanner.length; i++)
    {
        document.getElementById("banner"+i).setAttribute("src", arregloBanner[i].url)
    }
}

const cargarImagenesOferta = async () =>
{
    const resp = await fetch(`${URL_BASE}/oferta`, {method : "GET"});
    const Data = await resp.json();
    const arregloOferta = Data.data;
    
    for (var i = 0; i < arregloOferta.length; i++)
    {
        document.getElementById("oferta"+i+"img").setAttribute("src", arregloOferta[i].url);
        document.getElementById("oferta"+i+"texto").innerText = arregloOferta[i].texto;
    }
}

const cargarPaises = async () =>
{
    const resp = await fetch("https://restcountries.eu/rest/v2/all", {method: "GET"});
    const arregloPais = await resp.json();

    for (var i = 0; i < arregloPais.length; i++)
    {
        var nuevoPais = document.createElement("option")
        nuevoPais.innerText = arregloPais[i].name;
        document.getElementById("listaPaises").appendChild(nuevoPais);
    }
}

const cargarInicioSesion = async () =>
{
    var bodyLogin = { username: document.getElementById("usuarioLoginLP").value, password: document.getElementById("passwordLoginLP").value};

    const resp = await fetch(`${URL_BASE}/login`, 
    {
        method: "POST",
        body: JSON.stringify(bodyLogin),
        headers: {"Content-type" : "application/json"}
    });

    const Data = await resp.json();
    const msg = Data.msg;

    if (msg == "Usuario Demo")
    {
        mensajeE.style.display = "none";
        botonIS.style.display = "none";
        botonC.style.display = "";
        localStorage.setItem("usuario", Data.data.username);
        localStorage.setItem("idUsuario", Data.data.id);
        window.setTimeout(() => {location="eventos.html"}, 3000);
    }
    else if (msg == "Admin Demo")
    {
        mensajeE.style.display = "none";
        botonIS.style.display = "none";
        botonC.style.display = "";
        window.setTimeout(() => {location="eventos-admin.html"}, 3000);
    }
    else
    {
        botonIS.style.display = "none";
        botonC.style.display = "";
        window.setTimeout(()=> 
        {
            botonC.style.display = "none";
            botonIS.style.display = "";
            mensajeE.style.display = "";
        }, 3000);
    }   
}

const cargarRegistro = async () =>
{
    var bodyRegistro = 
    { 
        username: document.getElementById("usuarioRegistroLP").value,
        password: document.getElementById("passwordRegistroLP").value,
        nombre: document.getElementById("nombreRegistroLP").value,
        apellido: document.getElementById("apellidoRegistroLP").value,
        fechaNac: document.getElementById("fechaRegistroLP").value,
    };
    
    const resp = await fetch(`${URL_BASE}/registro`, 
    {
        method: "POST",
        body: JSON.stringify(bodyRegistro),
        headers: {"Content-type" : "application/json"}
    });

    const Data = await resp.json();
    const msg = Data.msg;

    if (msg == "")
    {
        mensajeSR.style.display = "none";
        botonR.style.display = "none";
        botonCR.style.display = "";
        window.setTimeout(() =>
        {
            botonCR.style.display = "none";
            botonR.style.display = "";
            mensajeSR.style.display = "";
        }, 3000);
    }
}

const main = () =>
{
    cargarImagenesBanner();
    cargarImagenesOferta();
    cargarPaises();

    document.getElementById("botonIS").onclick = cargarInicioSesion;
    document.getElementById("botonR").onclick = cargarRegistro;
    mensajeSR.style.display = "none";
    botonCR.style.display = "none";
    botonC.style.display = "none";
    mensajeE.style.display = "none";
}

window.addEventListener("load", main)