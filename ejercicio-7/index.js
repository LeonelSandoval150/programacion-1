function calcular(dato1,dato2,seleccion)
{
    if (seleccion==0) {
        const resultado= parseInt(dato1)+parseInt(dato2)
        return resultado
    }
//uhwdyhueyf
    else{
        if (seleccion==1) {
            const resultado= (dato1-dato2)
            return resultado     
        }
        else {
            if (seleccion==2) {
                const resultado=(dato1*dato2)
                return resultado
            }
            else {
                if (seleccion==3) {
                    const resultado= (dato1/dato2)
                    return resultado
                }
            }
            
        }

        
    }

}

/*solo se enfocara en recolectar los
 datos y entregarlos a la funcion calcular
 */
function mostrar()
{
    //forma1
    const seleccion= document.getElementById("sh_operacion").value
   const dato1= document.getElementById("inp_dato1").value
   const dato2= document.getElementById("inp_dato2").value
  
  //aca ejecutamos e invocamos a la funcion 
const respuesta= calcular(dato1,dato2,seleccion)

document.getElementById("h_resultado").textContent=respuesta
}





