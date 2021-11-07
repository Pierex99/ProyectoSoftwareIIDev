const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const path = require('path');

const TiendaDAO = require("./api/tienda");
const ProductoTiendaDAO = require("./api/producto_tienda");
const ProductoDAO = require("./api/producto");
const productoPedidoAPI = require("./api/producto_pedido"); // Eliminación Pendiente
const registro = require("./api/registro");
const login = require("./api/login");

app.set('views', path.join("public", 'views'));
app.set('view engine', 'ejs');

app.use(express.static("assets"));
app.use(express.static("assets/demo"));
app.use(express.static("assets/img"));
app.use(express.static("public"));
app.use(express.static("public/views"));
app.use(express.static("public/js"));
app.use(express.static("public/views/pages"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// 1. Pagina Principal
app.get('/pagina_principal', function(req, res) {
    // Render del archivo pagina_principal.ejs [public\views\pages\pagina_principal.ejs]
    res.render('pages/pagina_principal');
});

// 2. Tiendas
app.get('/tiendas', async function(req, res) {
    // Creación de const[arreglo] que obtiene los registros de la tabla 'Tienda' de la BD
    const listaTiendas = await TiendaDAO.getAll()

    // Render del archivo tiendas.ejs [public\views\pages\tiendas.ejs]
    res.render('pages/tiendas', {
        // Se envía como variable 'tiendas' que contiene el arreglo listaTienda previamente creado
        tiendas: listaTiendas
    });
});

app.post('/tiendas', (req,res)=>{
    TiendaDAO.post(req,res);
});

// 3. Productos
app.get('/:id/productos', async function(req, res) {
    // Creación de const[int] que obtiene el idTienda enviado dentro de la ruta '/productos/:id'
    const productoTiendaId = req.params.id;
    // Creación de const[arreglo] que obtiene los registros de la tabla 'Producto_Tienda' de la BD
    // donde su idTienda coincida con el idTienda obtenido en 'productoTiendaId'
    const listaProductoTiendaDB = await ProductoTiendaDAO.getProductoTienda(parseInt(productoTiendaId));
    // Creación de const[arreglos]
    const listaProducto = [];
    const listaProductoTienda = [];

    // Iteración de los elementos de listaProductoTiendaDB
    for (let object of listaProductoTiendaDB)
    {
        // Creación de var que obtiene el registro del producto en la tabla 'Producto'  
        var producto = await ProductoDAO.getProducto(parseInt(object.idProducto))

        listaProductoTienda.push({
            id : object.id,
            idTienda: object.idTienda,
            idProducto: object.idProducto,
            precio: object.precio
        }),

        listaProducto.push({
            id : producto[0].id,
            nombreProd: producto[0].nombreProd,
            descripcion: producto[0].descripcion,
            imagen: producto[0].imagen
        })
    }

    res.render('pages/productos', {
        productoTienda: listaProductoTienda,
        producto: listaProducto
    });
});

// 4. Panel de Control Administrador
app.get('/:id/admin_index', async function(req, res) {
    const productoTiendaId = req.params.id;
    const listaProductoTiendaDB = await ProductoTiendaDAO.getProductoTienda(parseInt(productoTiendaId));
    const listaProducto = [];
    const listaProductoTienda = [];
    for (let object of listaProductoTiendaDB)
    {
        var producto = await ProductoDAO.getProducto(parseInt(object.idProducto))

        listaProductoTienda.push({
            id : object.id,
            idTienda: object.idTienda,
            idProducto: object.idProducto,
            precio: object.precio
        }),

        listaProducto.push({
            id : producto[0].id,
            nombreProd: producto[0].nombreProd,
            descripcion: producto[0].descripcion,
            imagen: producto[0].imagen
        })
    }

    res.render('pages/admin_index', {
        productoTienda: listaProductoTienda,
        producto: listaProducto
    });
});
//Login
app.get("/login", (req,res)=>{
    res.render('pages/login');
})
app.post("/login",(req,res)=>{
    login.get(req,res);
    
})
//Registro
app.get("/register",(req,res)=>{
    res.render('pages/register');
})

app.post("/register", (req,res)=>{
    registro.post(req,res);
})



app.get("/tienda", TiendaDAO.getAll); // Eliminación Pendiente
app.post("/producto_pedido", productoPedidoAPI.post); // Eliminación Pendiente
app.get("/:id/producto_pedido", productoPedidoAPI.get); // Eliminación Pendiente

// Depuración en consola
app.listen(PORT, () =>
{
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})