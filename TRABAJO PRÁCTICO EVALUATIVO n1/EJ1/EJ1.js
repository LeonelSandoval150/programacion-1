function descuento ()
{ // el contenido del select del html se guarda en una constante
    const automovil = document.getElementById ("auto_1").value
     // se analiza el contenido en base a lo que se guardo en la constante automovil 
    if (automovil == 0){
        // se raliza la operacion de descuento 
        const fordka =(1750000 * 15) / 100
        const precio = 1750000 - fordka ;
        // se raliza el descuento y se muestra 

        
        document.getElementById("h_resultado").textContent = "El precio con descuento es :"+precio+"$";
           // se guarda el precio con el descuento en el h1 gracias textContent

        
    }

    else if (automovil == 1) {
         // se raliza la operacion de descuento 
        const fordfiesta =(1950000 * 5)  /100
        const precio = 1950000- fordfiesta ;

        document.getElementById("h_resultado").textContent = "El precio con descuento es : "+precio+"$";
           // se guarda el precio con el descuento en el h1 gracias textContent

        
    }
    else{
         // se raliza la operacion de descuento 
        const FordFocus =(2560000 * 10) / 100
        const precio =  2560000 - FordFocus;

        document.getElementById("h_resultado").textContent = "El precio con descuento es :"+precio+"$";
        // se guarda el precio con el descuento en el h1 gracias textContent

    }

}