const ask = require('readline-sync')

/*
Os exercícios de hoje são divididos em interpretação e escrita de código. 
Para os de interpretação, coloque as respostas em comentários de código. 
Já, nos de escrita, lembre-se de imprimir no console os resultados.


█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██      
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████   
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██      
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████ 

██ ███    ██ ████████ ███████ ██████  ██████  ██████  ███████ ████████  █████   ██████  █████   ██████  
██ ████   ██    ██    ██      ██   ██ ██   ██ ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██ ██  ██    ██    █████   ██████  ██████  ██████  █████      ██    ███████ ██      ███████ ██    ██ 
██ ██  ██ ██    ██    ██      ██   ██ ██      ██   ██ ██         ██    ██   ██ ██      ██   ██ ██    ██ 
██ ██   ████    ██    ███████ ██   ██ ██      ██   ██ ███████    ██    ██   ██  ██████ ██   ██  ██████  


Tente responder os exercícios dessa seção sem executar o código. 
Se ficar muito difícil, pode rodar no seu computador para analisar e pensar sobre o resultado.                                                                                                                                                                                                

█████████████████████████████████████████████████████████████████████████████████████████████████████████

*/

//1. Leia o código abaixo

function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


    //a) O que vai ser impresso no console?
    // 10
    // 50

    //b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    // Nada





//2. Leia o código abaixo

let textoDoUsuario = ask.question("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

    //a. Explique o que essa função faz e qual é sua utilidade
    //Essa função pede um parâmetro com o nome "texto" e retorna em true ou false se esse texto em letras minúsculas contém "cenoura". A sua utilidade é conferir se determinada frase tem "cenoura" incluso ou não.

    //b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
        //i.   `Eu gosto de cenoura`
        //ii.  `CENOURA é bom pra vista`
        //iii. `Cenouras crescem na terra`
        // true
        // true
        // true






/*
█████████████████████████████████████████████████████████████████████████████████████████████████████████

███████ ██   ██ ███████ ██████   ██████ ██  ██████ ██  ██████  ███████     ██████  ███████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██ ██          ██   ██ ██
█████     ███   █████   ██████  ██      ██ ██      ██ ██    ██ ███████     ██   ██ █████
██       ██ ██  ██      ██   ██ ██      ██ ██      ██ ██    ██      ██     ██   ██ ██
███████ ██   ██ ███████ ██   ██  ██████ ██  ██████ ██  ██████  ███████     ██████  ███████

███████ ███████  ██████ ██████  ██ ████████  █████      ██████  ███████
██      ██      ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
█████   ███████ ██      ██████  ██    ██    ███████     ██   ██ █████
██           ██ ██      ██   ██ ██    ██    ██   ██     ██   ██ ██
███████ ███████  ██████ ██   ██ ██    ██    ██   ██     ██████  ███████

 ██████  ██████  ██████  ██  ██████   ██████
██      ██    ██ ██   ██ ██ ██       ██    ██
██      ██    ██ ██   ██ ██ ██   ███ ██    ██
██      ██    ██ ██   ██ ██ ██    ██ ██    ██
 ██████  ██████  ██████  ██  ██████   ██████

█████████████████████████████████████████████████████████████████████████████████████████████████████████
*/


/*
1. Escreva as funções explicadas abaixo:
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
​
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
*/

function informacoes() {
    console.log("Eu sou Leonardo, tenho 16 anos, moro em São Leopoldo e sou estudante.")
}

informacoes()

function informacoesPessoa(nome, idade, cidade, profissao) {
    if(typeof nome == "string" && typeof idade == "number" && typeof cidade == "string" && typeof profissao == "string"){
        return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
    }
}

console.log(informacoesPessoa("Rogério", 25, "Novo Hamburgo", "Engenheiro"))

/*
2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
    
    b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
    
    d) Faça uma função que recebe uma mensagem string como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

function soma(num1, num2) {
    console.log(num1 + num2)
}

soma(4, 10)

function maiorIgual(num1, num2) {
    return num1 >= num2
}

console.log(maiorIgual(6, 5))

function par(num) {
    return num % 2 == 0
}

par(3)

function mensagemString(mensagem) {
    console.log(mensagem.length, mensagem.toUpperCase())
}

mensagemString("Batata cozida")

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
    Números inseridos: 30 e 3
    Soma: 33
    Diferença: 27
    Multiplicação: 90
    Divisão: 10
*/

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

let numero1 = Number(ask.question("Insira um numero: "))
let numero2 = Number(ask.question("Insira um segundo numero: "))

console.log(`Números inseridos: ${numero1} e ${numero2}\nSoma: ${soma(numero1, numero2)}\nSubtração: ${subtracao(numero1, numero2)}\nMultiplicação: ${multiplicacao(numero1, numero2)}\nDivisão: ${divisao(numero1, numero2).toFixed(2)}`)