const ask = require("readline-sync")
let resultado
let rodando = true

console.log("\nInstruções: Os sinais de operação são:\n + ou Soma\n - ou Subtracao\n * ou Multiplicacao\n / ou Divisao\n % ou Mod. \nApós terminar de calcular, responda a última pergunta para parar ou calcular novamente. \n")

while(rodando) {

    let numero1 = Number(ask.question("Digite o primeiro numero "))
    let operacao = ask.question("Digite a operacao ")
    let numero2 = Number(ask.question("Digite o segundo numero "))

    console.log("Operacao:", numero1, operacao, numero2)

    switch(operacao.toLowerCase()) {
        case "soma":
        case "+":
            resultado = numero1 + numero2
            break
        case "subtracao":
        case "-":
            resultado = numero1 - numero2
            break
        case "multiplicacao":
        case "*":
            resultado = numero1 * numero2
            break
        case "divisao":
        case "/":
            resultado = numero1 / numero2
            break
        case "mod":
        case "%":
            resultado = numero1 % numero2
            break
        default:
            resultado = "Esta operação não existe."
    }

    if (numero1.toString() == "NaN") {
        resultado = "Esta operação não existe."
    }

    console.log("Resultado:", resultado)

    let continuar = ask.question("Deseja calcular mais numeros? sim/nao: ")

    switch(continuar.toLowerCase()) {
        case "sim":
            rodando = true
            break
        case "nao":
            rodando = false
            break
        default:
            rodando = false
            break
    }
}