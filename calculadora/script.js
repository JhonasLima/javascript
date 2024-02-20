var botoesNum = document.querySelectorAll('.botoesNum')
var botoesOpe = document.querySelectorAll('.botoesOpe')
var visorDados = document.querySelector('.visorDados')
var visorResultado = document.querySelector('.visorResultado')
var numeros = []
var resulCalc = ""
var resulTemp = ""
var numTemp = ""
visorDados.innerHTML = "0"
visorResultado.innerHTML = "0"

function atualizarTela() {
    visorDados.innerHTML = numeros.join("")
}

botoesNum.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = botao.value
         
        
        numeros = numeros.filter(elementos => elementos)
        if (numTemp == "" && numeros.length !== 0 && resulTemp == resul(numeros) && numeros.length - 1 !== "+" && numeros.length - 1 !== "-" && numeros.length - 1 !== "*" && numeros.length - 1 !== "/") {//Não permite que seja digitado outro numero apos a função resultado, permitido apenas operadores.
            alert("Digite um operador.")
        } else {
            resulTemp = ""
            numTemp = numTemp.toString() + valorBotao.toString()
            
            if(botao.value !== "."){
                valorBotao = parseFloat(botao.value) || botao.getAttribute('data-value')//data-value está passando o valo de dois zeros
            }

            if (numeros.length === 0) {
                visorDados.innerHTML = numTemp
            } else {
                visorDados.innerHTML = numeros.join("") + numTemp
            }
        }
        visorDados.scrollTop = visorDados.scrollHeight //Mantem a ultima linha  no visor em caso de muitas operações e numeros.
        //console.log(numTemp)
    })
})

botoesOpe.forEach(function (botao) {
    botao.addEventListener('click', function () {
        let valorBotao = (botao.value)
        let ultimoIndice = numeros[numeros.length - 1]
        numeros = numeros.filter(elementos => elementos) //Retira os indeces com valores vazio
        if (numTemp === "" && numeros.length === 0 
        || numTemp === "" && ultimoIndice === "+" 
        || numTemp === "" && ultimoIndice === "-" 
        || numTemp === "" && ultimoIndice === "x" 
        || numTemp === "" && ultimoIndice === "/") {
            alert("Digite um número para continuar.")
        } else {
            numeros.push(numTemp, valorBotao) //Adiciona o operador juntamente com o valor de numTemp
            numTemp = ""
            visorDados.innerHTML = numeros.join("") + numTemp
        }
        //console.log(numeros)
        visorDados.scrollTop = visorDados.scrollHeight
    })

})

function calcular() {
    if (resulCalc == resul(numeros) && numTemp === "") {
        alert("Digite uma operação e mais um número para calcular novamente")
    } else if (numeros[numeros.length - 1] === "+" && numTemp === "" 
    || numeros[numeros.length - 1] === "-" && numTemp === "" 
    || numeros[numeros.length - 1] === "/" && numTemp === "" 
    || numeros[numeros.length - 1] === "x" && numTemp === "" 
    || numeros[numeros.length - 1] === "\\%" && numTemp === "") {
        alert("Digite mais número.")
    }
    else if (numeros.length > 0) {
        numeros.push(numTemp)
        numTemp = ""
        let resultado = resul(numeros)
        resulCalc = resultado
        resulTemp = resulCalc
        //console.log(resultado)
        //console.log(numeros)
        //console.log(resulCalc)
        visorResultado.innerHTML = resulCalc
    }
}

function resul(numeros) {
    let resultado = parseFloat(numeros[0])

    for (let i = 1; i < numeros.length; i += 2) {
        const operador = numeros[i]
        const numero = parseFloat(numeros[i + 1])

        switch (operador) {
            case '/':
                resultado /= numero;
                break;
            case 'x':
                resultado *= numero;
                break;
            case '+':
                resultado += numero;
                break;
            case '-':
                resultado -= numero;
                break;
            case '%':
                resultado = (resultado / numero)*100
        }
    }

    if(resultado.toString().includes(".") === true){//toFixed limita o valor de casas decimais caso o numero tenha um ponto decimal.
        return resultado.toFixed(3); 
    } else {
        return resultado
    }
    
}

function limpar() {
    numeros = []
    resulCalc = ""
    resulTemp = ""
    numTemp = ""
    visorDados.innerHTML = "0"
    visorResultado.innerHTML = "0"
}

function apagar() {
    if (numTemp !== "") {
        numTemp = ""
        atualizarTela()
    } else {
        numeros.pop()
        //console.log(numeros)
        atualizarTela()
    }
}


document.addEventListener('DOMContentLoaded', function(){
    const btnInformacao = document.getElementById('btnInformacao')
    const informacao = document.getElementById('informacao')

    btnInformacao.addEventListener('click', function(){
        if(informacao.style.display === 'block'){
            informacao.style.display = 'none'
        } else {
            informacao.style.display = 'block'
        }
    })

    
})
