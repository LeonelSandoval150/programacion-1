       let =Ford_Ka
       let =Ford_Fiesta
       let= Ford_Focus

       let precio1 = 1.75000
       let precio2 = 1.950000
       let precio3 = 2.560000
       let total
       let desc
       let numero


function autos(dato)
{
       const dato= document.getElementById("sh_operacion").value
       if (dato==0) {
              const resultado= ('Temperaturabaja')
              return resultado   
       }else{
              if (dato==1) {
                  const resultado= ('Temperatura adecuada')
                  return resultado     
              }
              else {
                  if (dato==2) {
                      const resultado =('Temperatura alta')
                      return resultado 
                  }
              }

 //forma1

   
 //aca ejecutamos e invocamos a la funcion 
const respuesta= calcular(dato1,dato2)
   
document.getElementById("h_resultado").textContent='la Hipotenusa:'+respuesta
   
}

     
