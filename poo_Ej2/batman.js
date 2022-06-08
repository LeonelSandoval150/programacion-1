export default class Batman {
  
    constructor (){}


    async ejecutar (){

            const dato = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman')
            
            const batman_datos = await dato.json()
            let bama123=[]
    
            for (const Element of batman_datos.Search){
              let columna = 
                `
                <div class="col-lg-3">
                    <div class="card">
                        <img height="300" src="${Element.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${Element.Title}</h5>
                            <p class="card-text">año de lanzamiento: ${Element.Year}</p>
                            <p class="card-text">${Element.imdbID}</p>
                          
                        </div>
                    </div>
                </div>`

            bama123.push(columna)

                
            }
            document.getElementById("row").innerHTML = bama123.join('')
    }
   
}


