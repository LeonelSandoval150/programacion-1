const obtener_provincias= async () => {
 const provincias = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
 const provincias_A = await provincias.json()

 let filas = []

// recorrer los usuarios
// el array es una estructura repetitiva
provincias_A.forEach(element => {

    let fila=
    `<tr>

    <td>${element.nombre}</td>

    <td>${element.id}</td>
    </tr>`

    filas.push(fila)
    
});
document.getElementById("tbl_body").innerHTML = filas.join('')
}
// invocamos a la funcion
obtener_provincias()




/*
`<tr>
<td>${element.cantidad}</td>
<td>${element.inicio}</td>
<td>${element.parametros}</td>
<td>${element.provincias}</td>
<td>${element.nombre}</td>
<td>${element.centroide}</td>
<td>${element.lat}</td>
<td>${element.lon}</td>
<td>${element.id}</td>
</tr>`
*/

