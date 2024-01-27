var botoesNum = document.querySelectorAll('.botoesNum')
var botoesFunc = document.querySelectorAll('.botoesFunc')
var visor = document.querySelector('.visor')
var num = []
var func = []

botoesNum.forEach(function (botao) {
    botao.addEventListener('click', function () {

        let valorBotao = botao.value
        num.push(valorBotao)
        visor.innerHTML = num
        console.log(num)
    })

})

botoesFunc.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (num.length === 0){
            alert("Digite um numero")
        } else {
        let valorBotao = botao.value
        func.push(valorBotao)
        visor.innerHTML = num
        console.log(func)
        }
    })

})
