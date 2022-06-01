// para el que el archivo mail se puedan importan cosas tiene que ser catalogado mululo
//el mudulo esta conformado por muchas clases
import Trapecio from "./trapecio.js";



function invocar (dato1,dato1,dato3){



    //forma1
    const dato1= document.querySelector("#inp_dato1").value
    // forma2
   const dato2= document.getElementById("inp_dato2").value

   const dato3= document.getElementById("inp_dato3").value

    // la instancia de la clase se considera un objeto y nos va apermitir el acceso ala metodo de la clase

    const trapecio = new Trapecio (dato1,dato2,dato3)
   const respuesta =  trapecio.calcular_trapecio()

   document.getElementById("h_resultado").textContent='El trapecio es :'+respuesta
}

document .getElementById("btn").addEventListener("click",invocar)