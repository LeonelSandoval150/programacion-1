function mostrar_mensaje(){
    //popup
    alert("probando mi funcion")
}

function mostrar_en_consola(){
    //asignamos una cadena de string en una constante
    const nombre_apellido = ' leonel sandoval'

    /* forma 1 . sin template  string */
    console.log ('nombre y apellido:' + nombre_apellido + ' hfjhdfehfu')

    //forma 2  template  string - backtick
    console.log(`
    nombre y apellido : ${nombre_apellido} 
    DNI 66464667
    Direccion:bs as 1000
    `)
}

// condicionales
function validar () {
    const calificacion = prompt('ingrese su nota :');
    //condicion - forma 1

    /*
    if(calificacion>=7){
        alert('estas aprobado')
    }else{
        alert('nos vemos en diciembre bro')
    }
    */
   // expresion ternario
   (calificacion >= 7) ? alert("estas aprobado") : alert("desabrobado");
}

// funcion con retorno y comunicacion entre funciones
function calcular (){

    const Number= prompt('ingrese un numero');
    const  resultado = Number * 10 
    // estamos entreganddo una repuesta 
    return resultado    
} 

function visualizar (){
    // invocamos (ejutamos) la funcion calcular
    const respuesta = calcular ()
    alert(respuesta)

}
