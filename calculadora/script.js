var botoes = document.querySelectorAll('.botoesNum')

botoes.forEach(function(botao){
botao.addEventListener('click', function(){
    var visor = document.querySelectorAll(".visor")
    var valorBotao = botao.value
    visor.innerHTML = valorBotao.stringify
    console.log(valorBotao)
})

})