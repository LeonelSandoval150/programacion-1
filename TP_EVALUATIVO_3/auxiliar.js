function almacenar_indice(indice){

    localStorage.setItem("indice",indice)
    
    }
    
    function editar (index)
    {
       let lista_producto= JSON.parse(localStorage.getItem("Productos")) 

       document.getElementById("tipo").value= lista_producto[index].image

      document.getElementById("URL_img").value= lista_producto[index].image
    
      document.getElementById("inp_descripcion").value= lista_producto[index].descripcion
    
      document.getElementById("precio").value= lista_producto[index].precio_venta
    
      document.getElementById("select").value= lista_producto[index].select
    
    
      localStorage.setItem("indice",index)
    //apago el boton
      document.getElementById ("boton").style.display = "none"
    
      //
      document.getElementById ("btn_actualizar").style.display = "block"
      
    
    }

    function agregar_pedido(d,p)
{
    let nuevo_pedido = {
        descripcion:d,
        cantidad:1,
        precio:p
    }

    if("pedidos" in localStorage){
        let lista = JSON.parse(localStorage.getItem("pedidos"))
        lista.push(nuevo_pedido)
        localStorage.setItem("pedidos",JSON.stringify(lista))
    }else{
        let lista = [] 
        lista.push(nuevo_pedido)
        localStorage.setItem("pedidos",JSON.stringify(lista))
    }

    cargar_pedido()

}

function cargar_pedido(){
    let lista_productos  = JSON.parse(localStorage.getItem("pedidos"))
    let filas = []
    
    lista_productos .forEach(element => {
        let fila = `
            <tr style="background-color: black; color:white">
                <td>${element.descripcion}</td>
                <td>
                    ${element.cantidad}
                    <button class="btn btn-light btn-sm"><i class="fa fa-plus-square-o"></i></button>
                    <button class="btn btn-light btn-sm"><i class="fa fa-minus-square-o"></i></button>
                </td>
                <td>\$${element.precio}</td>
            </tr>

        `
        filas.push(fila)
    });
    document.getElementById("tbody_1").innerHTML = filas.join('')
    
}
cargar_pedido()