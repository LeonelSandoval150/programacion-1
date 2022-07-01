const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    }
   }
   //cree la const framework para 


const mostrar_en_consola = () => {
    const {lenguaje, patron, spa} = framework.características
    console.log(`
        Titulo: ${framework.titulo}
        Nombre: ${framework.nombre}

        Caracteristicas:
        Lenguaje: ${lenguaje}
        Patron: ${patron}
        Spa: ${spa}
`)
}
const boton = document.getElementById("btn").addEventListener("click",mostrar_en_consola)