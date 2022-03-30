function calcular (){

    const b1=parseInt(prompt('ingrese la base menor '));
    const b2=parseInt(prompt('ingrese la base mayor'));
    const altura=parseInt(prompt('ingrese la altura'));
    const suma= b1 + b2;
    const mul= suma*altura;
    const resultado = mul/2;

    // estamos entreganddo una repuesta 
    return resultado    
} 

function visualizar (){
    // invocamos (ejutamos) la funcion calcular
    const respuesta = calcular()
    alert(respuesta)   
}