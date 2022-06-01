// para el que el archivo mail se puedan importan cosas tiene que ser catalogado mululo
//el mudulo esta conformado por muchas clases
import Vehiculo from "./vehiculo.js";
import Persona from "./persona.js";

function invocar (){

    let kilometros = 50000
    let marca = 'Ford'

    // la instancia de la clase se considera un objeto y nos va apermitir el acceso ala metodo de la clase

    // crear la instancia de la clase vehiculo
    const vehiculo = new Vehiculo (kilometros,marca)
    vehiculo.mostrar_km()


     //creamos la instancia de la clase persona
     const persona = new Persona( )

     persona .appellido = 'Perez'
     persona.nombre = 'juan'
     persona.mostrar_datos_personales()
    


}

//const boton = document .getElementById("btn")
//boton. addEventListener("click",invocar)

// otra forma
document .getElementById("btn").addEventListener("click",invocar)
