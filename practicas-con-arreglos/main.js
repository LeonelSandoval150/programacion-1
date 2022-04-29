let lenguajes =[' Python', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'PHP' , 'Ruby']

function arreglo_1()
{
    const longitud =lenguajes.length
    console.log ('longitud del Arreglo:'+longitud)

    const ult = lenguajes [longitud-1 ]
    const ter = lenguajes[2]

    

    document.getElementById("h_resultado").textContent='longitud: ' + longitud  + ' -el  ultimo es ' +ult+ ' el tercero es '+ter


}

// ejercicio 2
function arreglo_2()
{
    lenguajes.forEach((element,index) => {
        console.log(index+'-'+element)
    });

}

lenguajes.push('go')
lenguajes.shift()
lenguajes.unshift("kotlin")

const posicion = 4;
const numeroElementos = 2;
const elementosEliminados = lenguajes.splice(posicion,numeroElementos);
console.log(elementosEliminados)

console.log(lenguajes)











