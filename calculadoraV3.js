const ask = require("readline-sync")
let resultado
let rodando = true
let numero1
let numero2
let trocar = true

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

function divisao(num1, num2) {
    return num1 / num2
}

function mod(num1, num2) {
    return num1 % num2
}

function potencia(num1, num2) {
    return num1 ** num2
}

function raiz(num1, num2) {
    return Math.pow(num1, 1/num2)
}

function calcular(){
    console.clear()
    if (trocar) {
        numero1 = Number(ask.question("Digite o primeiro numero: "))
        numero2 = Number(ask.question("Digite o segundo numero: "))

        console.clear()
    }
    console.log(`Os seus números são ${numero1} e ${numero2}.`)
    console.log(" Operações:\n (1) + Soma\n (2) - Subtracao\n (3) * Multiplicacao\n (4) / Divisao\n (5) % Modulo\n (6) ^ Potencia\n (7) # Raiz")
    let operacao = ask.question("Digite a operacao: ")

    switch(operacao.toLowerCase()) {
        case "1":
        case "soma":
        case "+":
            resultado = soma(numero1, numero2)
            operacao = "+"
            break
        case "2":
        case "subtracao":
        case "-":
            resultado = subtracao(numero1, numero2)
            operacao = "-"
            break
        case "3":
        case "multiplicacao":
        case "*":
        case "x":
            resultado = multiplicacao(numero1, numero2)
            operacao = "*"
            break
        case "4":
        case "divisao":
        case "/":
            resultado = divisao(numero1, numero2)
            if (resultado ==  0 || resultado ==  Infinity) {
                resultado = "Esta operação não existe. Motivo = Divisão por 0"
            }
            operacao = "/"
            break
        case "5":
        case "modulo":
        case "mod":
        case "%":
            resultado = mod(numero1, numero2)
            operacao = "%"
            break
        case "6":
        case "potencia":
        case "^":
        case "**":
            resultado = potencia(numero1, numero2)
            operacao = "^"
            break
        case "7":
        case "raiz":
        case "#":
            resultado = raiz(numero1, numero2)
            operacao = "#"
            break
        default:
            resultado = "Esta operação não existe. Motivo: Operador inválido"
            break
    }

    console.clear()
    console.log(`Operação: ${numero1} ${operacao} ${numero2}`)

    if (numero1.toString() == "NaN" && typeof resultado == "string") {
        resultado = resultado.replace("inválido", "e número inválido")
    } else if (numero1.toString() == "NaN") {
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

    switch(prosseguir.toLowerCase()) {
        case "1":
            trocar = false
            break
        case "2":
            trocar = true
            break
        case "0":
            rodando = false
            break
    }
    console.clear()
}


while(rodando) {
    calcular()
}