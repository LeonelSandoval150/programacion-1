function calcular(d1)
{
     fahrenheit = (d1 *1.8) + 32
    return 'resultado='+ fahrenheit

}

/*solo se enfocara en recolectar los
 datos y entregarlos a la funcion calcular
 */
function mostrar()
{
    //forma1
   const dato1= document.querySelector("#inp_dato1").value
 

  //aca ejecutamos e invocamos a la funcion 
const respuesta= calcular(dato1)

document.getElementById("h_resultado").textContent=respuesta
}
// encontrar u obtener el buton y guardarlo en la constante
const boton = document.getElementById("btn_calcular");

// agregamos un evento a escuchar. en este caso el "click"
boton.addEventListener("click", mostrar);
