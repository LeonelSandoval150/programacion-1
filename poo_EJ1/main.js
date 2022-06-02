// para el que el archivo mail se puedan importan cosas tiene que ser catalogado mululo
//el mudulo esta conformado por muchas clases


// nos importamos la clase Trapecio que proviene del archivo trapecio.js 
 import Trapecio from "./trapecio.js";

     function ejecutar (){

        const dato1=document.getElementById("inp_dato1").value

        const dato2=document.getElementById("inp_dato2").value

        const dato3=document.getElementById("inp_dato3").value

            
        // la instancia de la clase se considera un objeto y nos va apermitir el acceso ala metodo de la clase

        // creamos la instancia de la clase  Trapecio
            const trapecio = new Trapecio (dato1,dato2,dato3)
            trapecio.calcular_area_trap()
            // mediante el uso de la instancia invocamos y/o ejecutamos el metodo 
            const respuesta = trapecio.calcular_area_trap()

        document.getElementById("h_resultado").textContent='El trapecio es :'+respuesta
     }

 document .getElementById("btn").addEventListener("click",ejecutar)