//crear una array
//creamos un arreglo de string
let series = ['breaking bad' ,'okupas','narco','casados con hijos','peaky blinders']

// como conocer la longitud de array
const longitud =series.length
console.log ('longitud del Arreglo:'+longitud)

/* como acceder a un elemento del arreglo 
haciendo uso del index */
const primero = series [0]
console.log('primer elemento:'+ primero)

//como accedo al ultimo elemento
const ultimo = series [longitud-1];
console.log('ultimo elemento:' + ultimo)

// recorrer un arreglo haciendo uso de un foreach
series.forEach ( (element , index) => {
    console.log(index+'-'+element)
});

// como agregar un elemento al final de un array
series.push('Dragon ball')
console.log(series)

// eliminar el ultimo elemento de un arreglo
series.pop()
console.log(series)

// como agregar un elemeneto al inicio de un arreglo 
series.unshift("grey's anatomy")
console.log(series)
// como elimino el primer elemento de un arreglo
series.shift()
console.log(series)
//como obtener la posicion de un alemento
const indice= series.indexOf('casados con hijos')
console.log("Indice obtenido:"+ indice)

//como eliminar un elemento teniendo su posicion
// 1er caso - eliminar un unico elemento
series.splice(indice,1)
console.log(series)
//2do caso -eliminar mas de un elemento
const posicion = 1;
const numeroElementos = 2;
const elementosEliminados = series.splice(posicion,numeroElementos);
console.log(elementosEliminados)
console.log(series)

// copiar un array
let copia = series.slice()
copia.push('dragon ball')
console.log(copia)
console.log(series)