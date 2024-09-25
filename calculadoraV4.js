const ask = require("readline-sync")
let resultado
let rodando = true
let numero1
let numero2
let trocar = true
let operacao

function operar(num1, num2, operador) {
    switch(operador.toLowerCase()) {
        case "1":
        case "+":
            operacao = "+"
            return (num1 + num2)
        case "2":
        case "-":
            operacao = "-"
            return (num1 - num2)
        case "3":
        case "*":
            operacao = "*"
            return (num1 * num2)
        case "4":
        case "/":
            operacao = "/"
            return (num1 / num2)
        case "5":
        case "%":
            operacao = "%"
            return (num1 % num2)
        case "6":
        case "^":
            operacao = "^"
            return (num1 ** num2)
        case "7":
        case "#":
            operacao = "#"
            return (Math.pow(num1, 1/num2))
        default:
            return "Esta operação não existe. Motivo: Operador inválido"
    }
}


function calcular(){
    console.clear()
    if (trocar) {
        numero1 = Number(ask.question("Digite o primeiro numero: "))
        numero2 = Number(ask.question("Digite o segundo numero: "))

        console.clear()
    }
    console.log(`Os seus números são ${numero1} e ${numero2}.`)
    console.log(" Operações:\n (1 | +) Soma\n (2 | -) Subtração\n (3 | *) Multiplicação\n (4 | /) Divisão\n (5 | %) Módulo\n (6 | ^) Potência\n (7 | #) Raiz")
    operacao = ask.question("Digite a operacao: ")

    resultado = operar(numero1, numero2, operacao)

    console.clear()
    console.log(`Operação: ${numero1} ${operacao} ${numero2}`)

    if (numero1.toString() == "NaN" || numero2.toString() == "NaN" && typeof resultado == "string") {
        resultado = resultado.replace("inválido", "e número inválido")
    } else if (numero1.toString() == "NaN" || numero2.toString() == "NaN") {
        resultado = "Esta operação não existe. Motivo: Número inválido"
    }

    switch(typeof resultado) {
        case "string":
            console.log(`Resultado: ${resultado}`)
            break
        default:
            console.log(`Resultado: ${Number(resultado.toFixed(2).toString())}`)
            break    
    }

    console.log("\n (1) Continuar e manter os números\n (2) Continuar e trocar os números\n (0) Encerrar")
    let prosseguir = ask.question("Deseja prosseguir? Se sim, como? ")

    switch(prosseguir) {
        case "1":
            trocar = false
            break
        case "2":
            trocar = true
            break
        default:
            rodando = false
            break
    }
    console.clear()
}


while(rodando) {
    calcular()
}