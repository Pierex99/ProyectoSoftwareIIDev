const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const bannerAPI = require("./api/banner");
const ofertaAPI = require("./api/oferta");
const tipoAPI = require("./api/tipo");
const categoriaAPI = require("./api/categoria");
const pedidoAPI = require("./api/pedido");
const eventoAPI = require("./api/evento");
const eventoPedidoAPI = require("./api/evento_pedido");
const login = require("./api/login");
const registro = require("./api/registro");

app.use(express.static("public/html"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post("/login", login.post);
app.post("/registro", registro.post);

// API REST 
// Recurso: Banner
// 1. GET ALL

app.get("/banner", bannerAPI.getAll);

// Recurso: Oferta
// 1. GET ALL

app.get("/oferta", ofertaAPI.getAll);

// Recurso: Pedido
// 1. POST

app.post("/pedido", pedidoAPI.post);

// Recurso: Evento Pedido
// 1. POST

app.post("/evento_pedido", eventoPedidoAPI.post);

// 2. GET

app.get("/evento_pedido/:id", eventoPedidoAPI.get);

// Recurso: Tipos
// 1. GET ALL

app.get("/tipo", tipoAPI.getAll);

// Recurso: Categorias
// 1. GET ALL

app.get("/categoria", categoriaAPI.getAll);

// Recurso: Eventos
// 1. GET ALL

app.get("/evento", eventoAPI.getAll);

// 2. GET

app.get("/evento/:id", eventoAPI.get);

// 3. PUT

app.put("/evento", eventoAPI.put);

// 4. DELETE

app.delete("/evento/:id", eventoAPI.delete);

// 4. POST

app.post("/evento", eventoAPI.post);

app.listen(PORT, () =>
{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})