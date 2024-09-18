const ask = require("readline-sync")
let resultado
let rodando = true

while(rodando) {

    console.log("\nInstruções: Os sinais de operação são:\n + ou Soma\n - ou Subtracao\n * ou Multiplicacao\n / ou Divisao\n % ou Mod\n ^ ou Potencia\n # ou Raiz\nApós terminar de calcular, responda a última pergunta para parar ou calcular novamente. \n")

    let numero1 = Number(ask.question("Digite o primeiro numero "))
    let operacao = ask.question("Digite a operacao ")
    let numero2 = Number(ask.question("Digite o segundo numero "))

    console.log("Operação:", numero1, operacao, numero2)

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
        case "x":
            resultado = numero1 * numero2
            break
        case "divisao":
        case "/":
            resultado = numero1 / numero2
            if (resultado ==  0 || resultado ==  Infinity) {
                resultado = "Esta operação não existe. Motivo = Divisão por 0"
            }
            break
        case "modulo":    
        case "mod":
        case "%":
            resultado = numero1 % numero2
            break
        case "potencia":
        case "^":
            resultado = numero1 ** numero2
            break
        case "raiz":
        case "#":
            resultado = Math.pow(numero1, 1/numero2);
            break
        default:
            resultado = "Esta operação não existe. Motivo: Operador inválido"
            break
    }

    if (numero1.toString() == "NaN" && typeof resultado == "string") {
        resultado = resultado.replace("inválido", "e número inválido")
    } else if (numero1.toString() == "NaN") {
        resultado = "Esta operação não existe. Motivo: Número inválido"
    }

    switch(typeof resultado) {
        case "string":
            console.log("Resultado:", resultado)
            break
        default:
            console.log("Resultado:", Number(resultado.toFixed(2).toString()))
            break    
    }

    let continuar = ask.question("Deseja calcular mais numeros? sim/nao: ")

    switch(continuar.toLowerCase()) {
        case "sim":
            rodando = true
            break
        default:
            rodando = false
            break
    }
}