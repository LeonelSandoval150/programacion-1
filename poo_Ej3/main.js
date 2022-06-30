import Producto from "./producto.js";
//const producto = new Producto()

function guardar ()
{
    let descripcion = document.getElementById ("inp_descripcion").value
    let precio_Venta = document.getElementById ("inp_precio_venta").value
    let categoria = document.getElementById ("slt_cat").value
    let producto = new Producto(descripcion,precio_Venta,categoria)
    // invocamos (ejecutamos) el metodo guardar_preducto(),
    producto.guardar_producto()
}

document.getElementById ("btn_guardar").addEventListener("click",guardar)

function listar (){
    let producto= new Producto()
    producto.obtener_productos()

}
listar()