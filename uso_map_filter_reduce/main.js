const tareas =[
    //poner si o si la coma para el otro objetos 
    {
        nombre : 'Testeando soft',
        duracion : 25

    },

    {
        nombre : 'implementacion de alta cliente',
        duracion : 90

    },

    {
        nombre : 'Actualiza cliente',
        duracion : 40

    },

    {
        nombre : 'Deploy de soft',
        duracion : 120

    },
    {
        nombre : 'correccion de bug',
        duracion : 180

    },

]
//uso del metodo map()
let nombres = []
//forEach recorre a tarea y el push pone el nuevo nombre

tareas.forEach(element => {

    nombres.push(element.nombre)


});

//aplicando map ()

//let nombre2= tareas.map (tarea => {
 //   return tarea.nombre

//}) 

//cuando es una sola linea de codigo puedo omiter el return las llaves
let nombre2= tareas.map (tarea => tarea.nombre) 

// siempre el map me va a entregar un array en este caso nombres 

/*
    USO DE FILTER
*/
/*
let tareas_prolongadas =[]
tareas.forEach(element  => { 
    if (element.duracion >=120 ){
    tareas_prolongadas.push(element)
    }
} );
console.log(tareas_prolongadas)
*/


// Filtrar haciendo uso del metodo filter() = ())()()()()()

// forma larga

/*const tareas_prolongadas2= tareas.filter( tarea  => {
   return tareas.duracion >=120

} )
*/

 const tareas_prolongadas2=tareas.filter( tarea  =>  tarea.duracion >=120 )
 console.log(tareas_prolongadas2)




