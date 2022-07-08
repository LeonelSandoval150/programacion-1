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