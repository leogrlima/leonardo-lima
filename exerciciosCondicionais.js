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




//1. Leia o código abaixo:

let numero = 5

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

/*
    a) Explique o que o código faz. Qual o teste que ele realiza? 
    Ele testa se a váriavel "numero" dividida por 2 tem o resto 0, se tiver, ele imprimirá no console "Passou no teste." Senão, ele imprimirá "Não passou no teste."

    b) Para que tipos de números ele imprime no console "Passou no teste"? 
    Para números que divididos por 2 tenham o resto da divisão de 0.

    c) Para que tipos de números a mensagem é "Não passou no teste"? 
    É para os números que não se encaixarem na condição if.
*/


//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

let fruta = "Uva"
let preco
switch (fruta.toUpperCase()) {
  case "LARANJA":
    preco = 3.5
    break;
  case "MAÇÃ":
    preco = 2.25
    break;
  case "UVA":
    preco = 0.30
    break;
  case "PÊRA":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log(`O preço da fruta ${fruta} é R$ ${preco}`)

/*
    a) Para que serve o código acima?
    Para definir o preço de determinada fruta, neste caso "Uva". E após isso imprimir o nome e preço no console.

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
    // O preço da fruta Maçã é R$ 2.25

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
    do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
    // O preço da fruta Pêra é R$ 5
*/


//3. Leia o código abaixo:

const num1 = 5
if(num1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

//console.log(mensagem)

/*
    a) O que a primeira linha está fazendo?
    Definindo uma constante chamada mensagem "num1", com o valor 5

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    // 
    //
    Sim. Literalmente nada. tem um erro no código .-------.

    c) Haverá algum erro no console? Justifique.
    Sim, a váriavel "mensagem" está dentro de if.
*/



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
1. Faça um programa que declare uma variável com a sua idade e imprima no console um teste dizendo se você pode ou não dirigir (apenas maiores de idade).
*/

idade = 16

if (idade >= 18) {
  console.log("Pode dirigir")
} else {
  console.log("Não pode dirigir")
}

/*
2. Agora pesquise no Google o horário atual no Vietnã. Declare uma variável do tipo string que contenha os valores "manhã", "tarde", "noite" ou "madrugada"
com base no fuso horário do Vietnã. Utilize o bloco if/else para escrever uma mensagem, sendo ela "Bom dia, Vietnã!", "Boa tarde, Vietnã", "Boa noite, Vietnã" ou "Boa madrugada, Vietnã", dependendo de qual for o seu fuso horário atual.
*/

let Horario = "madrugada"

if (Horario == "manhã") {
  console.log("Bom dia, Vietnã!")
} else if (Horario == "tarde") {
  console.log("Boa tarde, Vietnã")
} else if (Horario == "noite") {
  console.log("Boa noite, Vietnã")
} else if (Horario == "madrugada") {
  console.log("Boa madrugada, Vietnã")
}


/*
3. Agora repita o exercício anterior, porém utilizando o bloco Switch/Case e utilizando o fuso horário do Havaí.
*/

let Horario2 = "manhã"

switch (Horario2) {
  case "manhã":
    console.log("Bom dia, Havaí!")
    break
  case "tarde":
    console.log("Boa tarde, Havaí")
    break
  case "noite":
    console.log("Boa noite, Havaí")
    break
   case "madrugada":
    console.log("Boa madrugada, Havaí")
   break
}