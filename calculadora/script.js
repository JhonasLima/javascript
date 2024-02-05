var botoesNum = document.querySelectorAll('.botoesNum')
var botoesOpe = document.querySelectorAll('.botoesOpe')
var visor = document.querySelector('.visor')
var numeros = []
var visorTemp = []
resulCalc = []
var numTemp = ""

    botoesNum.forEach(function (botao) {
        botao.addEventListener('click', function () {
            let valorBotao = parseFloat(botao.value)
            numTemp = numTemp.toString() + valorBotao.toString()
            if (numeros.length === 0) {
                visor.innerHTML = numTemp
            } else {
                visor.innerHTML = numeros.join("") + numTemp
            }
            console.log(numTemp)
        })
    })

botoesOpe.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = (botao.value)
        if (numTemp == "" && numeros.length == []){
            alert("Digite um numero antes.")
        } else if (numTemp === numeros[numeros.length-1]){ //Adionar apenas o operador
            numeros.push(valorBotao)
            numTemp = ""
            visor.innerHTML = numeros.join("")
        }
        else {
            numeros.push(numTemp, valorBotao)
            numTemp = ""
            visor.innerHTML = numeros.join("") + numTemp
        }
        console.log(numeros)
    })

})

function calcular(){
    if(resulCalc[resulCalc.length-1] == resul(numeros) && numTemp == ""){
     alert("Digite um operação e mais um numero para continuar")
    }
    
    else if (numeros.length > 0){
        numeros.push(numTemp)
        //numTemp = ""
        let resultado = resul(numeros)
        resulCalc.push(resultado)
        console.log(resultado)
        console.log(numeros)
        console.log(resulCalc)
    }
}

function resul(numeros) {
    let resultado = parseFloat(numeros[0])

    for (let i = 1; i < numeros.length; i += 2) {
        const operador = numeros[i]
        const numero = parseFloat(numeros[i + 1])

        switch (operador) {
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '/':
                resultado /= numero;
                break;
            case '*':
                resultado *= numero;
                break;
        }
    }
    return resultado;
}