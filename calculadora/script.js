var botoes = document.querySelectorAll('.botoesNum')

botoes.forEach(function(botao){
botao.addEventListener('click', function(){
    var input = document.querySelectorAll(".txtVisor")
    var valorBotao = botao.value
    input.value = valorBotao
})

})