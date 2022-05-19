let alumno ={
    nombre : 'Emmanuel',
    apellido : 'Maldonado',
    dni : 45287124,
    correos : {
        autlook :'em@autlook.com',
        gmail: 'em@gmail.com',
        yahoo :'em@yahoo.com',

    }

}
// otra forma 
//console.log(alumno.correos.yahoo)

/*
// forma 1
const yahoo= alumno.correos.yahoo
const gmail= alumno.correos.gmail
const autlook = alumno.correos.autlook

console.log(`
    correos :

    gmail:${gmail}
    yahoo : ${yahoo}
    autlook: ${autlook}
`)
*/

// forma 2 - destructuring object
 const {yahoo,gmail,autlook} = alumno.correos
 console.log(`
    correos :

    gmail:${gmail}
    yahoo : ${yahoo}
    autlook: ${autlook}
`)



