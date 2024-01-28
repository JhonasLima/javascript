var botoesNum = document.querySelectorAll('.botoesNum')
var botoesOpe = document.querySelectorAll('.botoesOpe')
var visor = document.querySelector('.visor')
var num = []
var operacao = []
var resultado = 0

botoesNum.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = botao.value
        num.push(valorBotao)
        visor.innerHTML = num.join("")
        if(num.length > 1){
            resul()
            visor.innerHTML = num.join(operacao[0])+"------"+resultado
        }
        console.log(num)
    })

})

botoesOpe.forEach(function (botao) {
    botao.addEventListener('click', function () {
        if (num.length === 0) {
            alert("Digite um numero")
        } else {
            let valorBotao = botao.value
            operacao.push(valorBotao)
            if(num.length > 1){
                resul()
            }
            console.log(operacao)
            visor.innerHTML = num.join(operacao[0])
        }
    })

})

function resul() {
    if (operacao[0] === "x") {
        resultado = num[0] * num[1]
    }
    else if (operacao[0] === "+") {
        resultado = parseFloat(num[0]) + parseFloat(num[1])
    }
    else if (operacao[0] === "/") {
        resultado = num[0] / num[1]
    }
    else if (operacao[0] === "-") {
        resultado = num[0] - num[1]
    }
    console.log(resultado)
}
