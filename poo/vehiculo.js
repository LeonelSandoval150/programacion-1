//poner mayuscula si o si
// export significa que lo voy a poder importar me lo tengo que acordar
export default class Vehiculo {
      // aca irian los atributos

      // el  constructor  es un metodo y el el primero que ejecuta primero 
    constructor (km , marca){

// hay que almacenar lo que se trae (no me vas atraer algo y voy andar con eso todo el dia )

        this.marca = marca
        this. kilometro = km


    }
    // no ponemos funcion porque es un metodo

    mostrar_km( )
    {
        alert (this.kilometro)
    }


}