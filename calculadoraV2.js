const ask = require("readline-sync")
let resultado
let rodando = true

while(rodando) {

    /*console.log("\nInstruções:\n\nForme uma operação digitando um número, a operação e outro número.\n\nSinais de operação:\n (1) + ou Soma\n (2) - ou Subtracao\n (3) * ou Multiplicacao\n (4) / ou Divisao\n (5) % ou Mod\n (6) ^ ou Potencia\n (7) # ou Raiz\n\nApós terminar de calcular, responda a última pergunta para parar ou calcular novamente.\n")*/

    console.clear()
    let numero1 = Number(ask.question("Digite o primeiro numero: "))
    console.log(" Operações:\n (1) + Soma\n (2) - Sub\n (3) * Multi\n (4) / Div\n (5) % Mod\n (6) ^ Pot\n (7) # Raiz")
    let operacao = ask.question("Digite a operacao: ")
    let numero2 = Number(ask.question("Digite o segundo numero: "))

    switch(operacao.toLowerCase()) {
        case "1":
        case "soma":
        case "+":
            resultado = numero1 + numero2
            operacao = "+"
            break
        case "2":
        case "sub":
        case "-":
            resultado = numero1 - numero2
            operacao = "-"
            break
        case "3":
        case "multi":
        case "*":
        case "x":
            resultado = numero1 * numero2
            operacao = "*"
            break
        case "4":
        case "div":
        case "/":
            resultado = numero1 / numero2
            if (resultado ==  0 || resultado ==  Infinity) {
                resultado = "Esta operação não existe. Motivo = Divisão por 0"
            }
            operacao = "/"
            break
        case "5":
        case "mod":
        case "%":
            resultado = numero1 % numero2
            operacao = "%"
            break
        case "6":
        case "pot":
        case "^":
            resultado = numero1 ** numero2
            operacao = "^"
            break
        case "7":
        case "raiz":
        case "#":
            resultado = Math.pow(numero1, 1/numero2);
            operacao = "#"
            break
        default:
            resultado = "Esta operação não existe. Motivo: Operador inválido"
            break
    }

    console.clear()
    console.log("Operação:", numero1, operacao, numero2)

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

    let continuar = ask.question("Deseja continuar? sim/nao: ")

    switch(continuar.toLowerCase()) {
        case "sim":
            rodando = true
            break
        default:
            rodando = false
            break
    }

    console.clear()
}