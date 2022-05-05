const calcular = (dato1) => {
// usamos las funcionn if para elegir la temperatura que nos dieron y le dicimos que nos parece su temperatura
    if (dato1  >=  14 && dato1 <= 32) {
        

        const resultado= ('Temperatura baja')
        return resultado   
    }
//uhwdyhueyf profe este ejercicio esta re bien jajajsk
    else{
        if (dato1  >  32 && dato1 <= 68) {
            const resultado= ('Temperatura adecuada')
            return resultado     
        }
        else {
            if (dato1  >=  68 && dato1 <= 96) {
                const resultado =('Temperatura alta')
                return resultado 
            }
            else {
                const resultado =('Temperatura desconocida')
                return resultado 
            }
            
        }

        
    }

}

/*solo se enfocara en recolectar los
 datos y entregarlos a la funcion calcular
 */


const mostrar = () => {
    const dato1 = document.getElementById("dato1").value;
  
// invocamos (ejutamos) la funcion calcular
  const respuesta = calcular(dato1);

  document.getElementById("h_resultado").textContent = respuesta;
    

}

// encontrar u obtener el buton y guardarlo en la constante
const boton = document.getElementById("btn_calcular");

// agregamos un evento a escuchar. en este caso el "click"
boton.addEventListener("click", mostrar);