const calcular = (n1,n2,n3) => {
    const grados =parseInt(n1)+parseInt(n2)+parseInt (n3)

    let mensaje = (grados == 180) ? "Es un triangulo" : "No es un triangulo";
    return grados+mensaje

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

