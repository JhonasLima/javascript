var botoesNum = document.querySelectorAll('.botoesNum')
var botoesOpe = document.querySelectorAll('.botoesOpe')
var visor = document.querySelector('.visor')
var numeros = []
var operacoes = []
var numTemp = ""

botoesNum.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = parseFloat(botao.value)
        numTemp = numTemp.toString() + valorBotao.toString()
        visor.innerHTML = numTemp
        console.log(numTemp)
    })
})

/*botoesNum.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = parseFloat(botao.value)
        numeros.push(valorBotao)
        visor.innerHTML = numeros.join("")
        if (numeros.length > 1) {
            resul()
        }
        console.log(numeros)
    })

})

botoesOpe.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = botao.value;
        let visorConteudo = visor.innerHTML.trim();

        if (visorConteudo !== '') {
            let ultimoCaractere = visorConteudo.slice(-1);
            if (isNaN(ultimoCaractere)) {
                visor.innerHTML = visorConteudo.slice(0, -1);
            }
            numeros.push(parseFloat(visorConteudo));
            operacoes.push(valorBotao);
            visor.innerHTML += valorBotao;
        }
    });
});


function resul() {
    var resultado = numeros[0]
    for (let i = 0; i < operacoes.length; i++) {
        const operador = operacoes[i]
        const proximoNumero = numeros[i + 1]

        if (operador === '+') {
            resultado += proximoNumero
        } else if (operador === '-') {
            resultado -= proximoNumero
        } else if (operador === '/') {
            resultado /= proximoNumero
        } else if (operador === '*') {
            resultado *= proximoNumero
        }
    }
    console.log(resultado)
}*/