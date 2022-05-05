function calcular(dato1,dato2)
{
  
    const potencia_1 = (dato1*dato1)
    const potencia_2 = (dato2 *dato2)
    const suma= potencia_1 + potencia_2
    const resultado =  Math.sqrt(suma)

    return resultado
}

/*solo se enfocara en recolectar los
 datos y entregarlos a la funcion calcular
 */
function mostrar()
{
    //forma1
   const dato1= document.querySelector("#inp_dato1").value
   // forma2
  const dato2= document.getElementById("inp_dato2").value

  //aca ejecutamos e invocamos a la funcion 
const respuesta= calcular(dato1,dato2)

document.getElementById("h_resultado").textContent='la Hipotenusa:'+respuesta

}