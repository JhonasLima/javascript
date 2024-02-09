var botoesNum = document.querySelectorAll('.botoesNum')
var botoesOpe = document.querySelectorAll('.botoesOpe')
var visor = document.querySelector('.visor')
var numeros = []
//var visorTemp = []
var resulCalc = ""
var resulTemp = ""
var numTemp = ""

    botoesNum.forEach(function (botao) {
        botao.addEventListener('click', function () {
            let valorBotao = parseFloat(botao.value)
            numeros = numeros.filter(elementos => elementos)
            if(numTemp == "" && numeros.length !== 0 && resulTemp == resul(numeros) && numeros.length-1 !== "+" && numeros.length-1 !== "-" && numeros.length-1 !== "*" && numeros.length-1 !== "/"){//Não permite que seja digitado outro numero apos a função resultado, permitido apenas operadores.
                alert("digite um operador")
                resulTemp = ""
            } else {
                numTemp = numTemp.toString() + valorBotao.toString()
            }

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
        numeros = numeros.filter(elementos => elementos) //Retira os indeces com valores vazio
        if (numTemp === "" && numeros.length === 0){
            alert("Digite um numero antes.")
        } /*else if (numTemp === numeros[numeros.length-1]){ //Adionar apenas o operador
            numeros.push(valorBotao)
            numTemp = ""
            visor.innerHTML = numeros.join("")
        }*/
        else {
            numeros.push(numTemp, valorBotao) //Adiciona o operador e juntamente com o valor de numTemp
            numTemp = ""
            visor.innerHTML = numeros.join("") + numTemp
        }
        console.log(numeros)
    })

})

function calcular(){
    if(resulCalc == resul(numeros) && numTemp === ""){
     alert("Digite um operação e mais um numero para continuar")
    }
    else if (numeros.length > 0){
        numeros.push(numTemp)
        numTemp = ""
        let resultado = resul(numeros)
        resulCalc = resultado
        resulTemp = resulCalc
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