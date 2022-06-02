//los atibutos hablan de las carateristicas


//poner mayuscula si o si
// export significa que lo voy a poder importar me lo tengo que acordar
 export default class Trapecio {
    // aca irian los atributos

    // el  constructor es un metodo y el el primero que ejecuta primero 
  constructor (dato1,dato2,dato3){

// hay que almacenar lo que se trae (no me vas atraer algo y voy andar con eso todo el dia )

      this.b1= dato1
      this.b2= dato2
      this.b3= dato3
  }

   
  calcular_area_trap (){
  
    const suma=parseInt(this.b1) +parseInt(this.b2) 
    const mul= (suma*this.b3);
    const resultado = mul/2;

    return resultado
  }



}