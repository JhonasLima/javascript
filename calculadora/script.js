var botoes = document.querySelectorAll('.botoesNum')
var visor = document.querySelector('.visor')

botoes.forEach(function(botao){
botao.addEventListener('click', function(){
    
    var valorBotao = botao.value
    visor.innerHTML = valorBotao
    console.log(valorBotao)
})

})