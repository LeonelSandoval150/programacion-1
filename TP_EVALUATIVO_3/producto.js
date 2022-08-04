export default class Producto{
    constructor(m,d,t,p,s){
        this.image =m
        this.descripcion = d
        this.tipo=t
        this.precio_venta = p
        this.select = s
    }
    //metodo
    guardar_producto(){
        let nuevo_producto = {
            image: this.image,
            descripcion: this.descripcion,
            tipo111:this.tipo,
            precio_venta: this.precio_venta,
            select: this.select    
        }
        if ("Productos" in localStorage) {
            //convertimos el JSON obtenido desde el storage en una exprecion nativa de javascript
            let lista_productos = JSON.parse(localStorage.getItem("Productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("Productos",JSON.stringify(lista_productos))
        }else{
            let lista_productos = []
            lista_productos.push(nuevo_producto)

            //guardar en el storage
            localStorage.setItem("Productos",JSON.stringify(lista_productos))
        }
        /*invoco nuevamente el metodo obtener_producto() para lograr reconstruir la tabla, y 
        así reflejar los datos actualizados que provienen del locarstorage, espesificamente 
        del item "Productos"
        */
       this.obtener_producto()

       this.vaciar_formulario()
    }
    obtener_producto(){
        /*recolectamos todos los productos alojados en el Item "Productos"
        que estan en notacion JSON. Debemos convertirlo en una exprecion 
        nativa de JavaScript (es decir, hacemos un JSON.parse())*/
        let lista_productos = JSON.parse(localStorage.getItem("Productos"))

        let filas = []
        lista_productos.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${index+1}</td>
                <td><img src="${element.image}" class="img-fluid" style="width:2rem"></td>
                <td>${element.tipo111}</td>
                <td>${element.precio_venta}</td>
                <td>${element.descripcion}</td>
                <td>${element.select}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#mymodal">
                        <i class="fa fa-trash"></i>                    
                    </button>

                    <button onclick="editar(${index})" class="btn btn-primary btn-sm">
                        <i class="fa fa-edit"></i>                    
                    </button>

                </td>
            </tr>
            `
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_producto(indice){
        let lista_producto= JSON.parse(localStorage.getItem("Productos"))

        lista_producto.splice(indice,1)

        localStorage.setItem("Productos",JSON.stringify(lista_producto))

        this.obtener_producto()

    }

    actualizar_producto ()
    {
        let indice = localStorage.getItem("indice")

        let lista_productos= JSON.parse(localStorage.getItem("Productos"))
        lista_productos[indice].tipo111= document.getElementById("tipo").value
        lista_productos[indice].image= document.getElementById("URL_img").value
        lista_productos[indice].descripcion= document.getElementById("inp_descripcion").value
        lista_productos[indice].precio_venta= document.getElementById("precio").value
        lista_productos[indice].select= document.getElementById("select").value


        localStorage.setItem("Productos",JSON.stringify(lista_productos))

        this.obtener_producto()

        this.vaciar_formulario()

        document.getElementById("boton").style.display= "block"
        document.getElementById("btn_actualizar").style.display="none"

    }

    vaciar_formulario()
    {
        document.getElementById("form_producto").reset() 

    }


    hacer_catalogo()
    {
        let lista_productos = JSON.parse(localStorage.getItem("Productos"))

        let filas = []
        lista_productos.forEach((element,index) => {
            let fila = `
            
            <div class="col-lg-3">
            <div   style="background-color: black; color:white" class="card mb-10">
                <img height="200" src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4  style="margin-bottom:5px"  class="card-title">${element.select}</h4>
                    <p style="margin-bottom:5px" class="card-text">${element.descripcion}</p>
                    <p  class="card-text"> ${element.tipo111} ${element.precio_venta}</p>
                    <button class="btn btn-primary" onclick="agregar_pedido('${element.descripcion}','${element.precio_venta}')">Comprar</button>
                </div>
            </div>
        </div>
            
            `
            filas.push(fila)
            
        });
        document.getElementById("div_1").innerHTML = filas.join('')
       
    }
       
}








