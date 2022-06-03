import Batman from "./batman.js";

    function obtener_datos(){

        const bat = new Batman()
        bat.ejecutar()

    }
 document.getElementById("btn").addEventListener("click",obtener_datos)