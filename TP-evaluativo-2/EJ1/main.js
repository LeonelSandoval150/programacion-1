//async significa esperar
const obtener_casa = async () => { 
      //fetch realiza una solicitud HTTP a traves del metodo get](obtiene)
    //endpoint o ruta

    const casas = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    const lista_de_casas = await casas.json()
        //Recorremos la api y la almacenamos en la constante "lista_de_casas"
    let filas = []
    lista_de_casas.forEach((element,index) => {
        let fila = 
        // recorrer las monedas
     // el array es una estructura repetitiva
        `<tr>
            <td>${index+1}</td>
            <td>${element.casa.nombre}</td>
            <td>${element.casa.compra}</td>
            <td>${element.casa.venta}</td>
        </tr>`
        filas.push(fila)
    });
      //Recorremos "lista_de_casas" con un foreach y guardamos parte de codigo que ira en el tbody
    document.getElementById("tbl_body").innerHTML = filas.join('')
     //Insertamos el codigo de filas en el tbody con el .innerHTML
}
obtener_casa()
//Invocamos la funcion


