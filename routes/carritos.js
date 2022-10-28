const express = require("express")
const fileManagement = require ("../utils/module.js")
const carritos = express.Router();



let carritoServer = {id: "", timestamp: "", productos: []}

carritos.post("/",async(request,response)=>{
    if (request.body.id) {
        const producto = await fileManagement.buscarPorId(parseInt(request.body.id))
        if (producto) {
        carritoServer.productos.push(producto);
        }
    }
    carritoServer.timestamp = new Date(Date.now()).toLocaleString().replace(",", "")
    const carritoId = await fileManagement.agregarCarrito(carritoServer);
    response.status(200).json({
        message:"carrito creado",
        id: carritoId
        })
})


carritos.delete("/:id", async(request, response)=>{
    const {id} = request.params;
    const carrito = await fileManagement.borrarCarritoId(parseInt(id))
    if (carrito) {
        response.json({
            message: "carrito borrado",
            id: id
        })
    } else {
        response.json({
            message:"carrito no borrado"
        })
    }
    carritoServer = {id: "", timestamp: "", productos: []}
})

carritos.get("/:id/productos", async(request, response)=>{
    const {id} = request.params;
    const carrito = await fileManagement.buscarCarritoId(parseInt(id))
    if (carrito) {
        response.status(200).json({
            message: "carrito encontrado",
            carritoId: id,
            productos: carrito.productos
        })
    } else {
        response.status(404).json({message: "Carrito no encontrado"})
    }
})


carritos.post("/:id/productos",async(request,response)=>{
    const {id} = request.params;

    const carrito = await fileManagement.buscarCarritoId(parseInt(id))
    if (carrito) {
       carritoServer = carrito

    } else {
        response.status(404).json({message: "Carrito no encontrado"})
    }
    
    if (request.body.id) {
        const producto = await fileManagement.buscarPorId(parseInt(request.body.id))
        if (producto) {
            carritoServer.productos.push(producto);
        }
    } else {
        response.status(400).json({message: "Debe enviar un id de producto."})
    }

    const carritoUpdate = await fileManagement.actualizarCarritoId(parseInt(id),carritoServer);
    response.json({
        message:"producto agregado al carrito",
        carritoId: id,
        productos: carritoUpdate.productos
        })
})

carritos.delete("/:id/productos/:id_prod", async(request, response)=>{
    const {id , id_prod} = request.params;

    const carrito = await fileManagement.buscarCarritoId(parseInt(id))
    if (carrito) {
       carritoServer = carrito
        }else {
            response.status(404).json({message: "Carrito no encontrado"})
        }

    carritoServer.productos = carritoServer.productos.filter(el => el.id != id_prod)

    const carritoUpdate = await fileManagement.actualizarCarritoId(parseInt(id),carritoServer);
    response.status(200).json({
        message:"producto borrado del carrito",
        carritoId: id,
        productos: carritoUpdate.productos
        })
})



module.exports = carritos;