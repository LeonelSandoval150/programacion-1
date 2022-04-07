
function calcular(radio)
{
    const resultado= Math.PI*Math.pow(radio,2)
    return resultado

}
function mostrar()
{
  const radio= document.getElementById("inp_radio").value

const respuesta= calcular(radio)

document.getElementById("r_respuesta").textContent=respuesta
}

