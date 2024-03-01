//dom

const lampada= document.querySelector ('#lampada')
const acenda = document.querySelector ('#Ligar')
const apague = document.querySelector ('#Desligar')

//eventos

acenda.addEventListener('click', Ligar)
apague.addEventListener('click', Desligar)

//funcoes

function Ligar(){

    lampada.src='images/acesa.gif'
}
function Desligar (){

    lampada.src='images/apagada.gif'
}