export default class Producto {
    constructor(d,pv,c){
        this.descripcion = d
        this.precio_venta = pv
        this.categoria = c

    }



    // metodo
    guardar_producto(){
        let nuevo_producto = {

        descripcion : this.descripcion,
        precio_venta: this.precio_venta,
        categoria:this.categoria
        }
        if ("productos" in localStorage) {
            /*
            // comvertimos al JSON obtenido desde el storage en una expresion de javascript
            */
           let lista_productos= JSON.parse( localStorage.getItem("productos"))

           lista_productos.push (nuevo_producto)
           localStorage.setItem("productos",JSON.stringify(lista_productos))
        
        }else {


            let lista_productos = []

            lista_productos.push(nuevo_producto)

            //guaedar en el storage

            localStorage.setItem("productos", JSON.stringify(lista_productos))
        }
   

    }

    obtener_productos (){
//recolectamos todos los productos alojados en el Item "productos"que estan alojados
      
let lista_productos=JSON.parse(localStorage.getItem("productos")) 

    }
    
}


