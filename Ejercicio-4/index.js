const calcular = (n1,n2,n3) => {
    const bloque1 = Math.pow(n2,2)-(4*n1*n3)
    const bloque2 = Math.sqrt(bloque1)
    const bloqueA= (-n2) + (bloque2)
    const bloqueA2=(bloqueA)/(2*n1)
    const bloqueB= (-n2) - (bloque2)
    const bloqueB2=(bloqueB)/(2*n1)


    return 'raiz 1= ' + bloqueA2 + 'raiz 2= ' +bloqueB2

}


const mostrar = () => {
    const dato1 = document.getElementById("dato1").value;
    const dato2 = document.getElementById("dato2").value;
    const dato3 = document.getElementById("dato3").value;
    //ejecutamos la funcion

  const respuesta = calcular(dato1,dato2,dato3);

  document.getElementById("h_resultado").textContent = respuesta;
    

}

// encontrar u obtener el buton y guardarlo en la constante
const boton = document.getElementById("btn_calcular");

// agregamos un evento a escuchar. en este caso el "click"
boton.addEventListener("click", mostrar);