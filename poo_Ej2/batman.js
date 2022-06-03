export default class Batman {
  
    constructor (){}


    async ejecutar (){

            const dato = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
            
            const batman_datos = await dato.json()
    
            for (const Element of batman_datos.Search){
            
                console.log(`
                ${Element.imdbID}
                ${Element.Title}
                ${Element.Year}
                ${Element.Poster}
                `)
            
            }

    }
   
}


