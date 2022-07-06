import Producto from "./producto.js"
    
function guardar(){
    let descripcion = document.getElementById("desc").value
    let precio_venta = document.getElementById("precio").value
    let select = document.getElementById("select").value
    let producto = new Producto(descripcion,precio_venta,select)
    /*Invocamos(ejecutamos) al metodo guardar_producto(),
    perteneciente a la clase producto*/
    producto.guardar_producto()
}
document.getElementById("boton").addEventListener("click",guardar)

function listar() {
    let producto=new Producto()
    producto.obtener_producto()
}
listar()

function eliminar ()
{
    let indice = localStorage.getItem("indice")
        // creamos una instancia 
    // pera acceder a los metodes y atributos de la clase Producto
    let producto = new Producto ()
    
    // haciendo uso de la instancia
    // invocamos el metodo eliminar_producto()
    producto.eliminar_producto(indice)
}

document.getElementById ("btn_eliminar").addEventListener("click",eliminar)