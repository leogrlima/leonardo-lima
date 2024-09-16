const ask = require("readline-sync")

// 1. 
// Crie um array 'time' com os nomes ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]. Verifique se "Roberto Carlos" está no array. Se sim, converta todos os nomes para maiúsculas e adicione "PERNA DE FUGUETE" ao final do nome de Roberto Carlos. Depois imprima todo o Array na tela.
let time = ["Pedro", "Carlos", "Vinícius Júnior", "Guiñazu", "Roberto Carlos", "Ronaldinho Gaúcho"]
let incluiRoberto =  time.includes("Roberto Carlos")
console.log(incluiRoberto)
if (incluiRoberto){
    time.splice(time.indexOf("Roberto Carlos"), 1, `${time[time.indexOf("Roberto Carlos")].toUpperCase()} PERNA DE FOGUETE`)
}
console.log(time)

// 2. Pokemon
// Crie um array 'pokemons' com os nomes ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]. Adicione "Squirtle" ao início, remova o último Pokémon, e verifique se "Pikachu" está no array. Se não estiver, adicione "Pikachu" ao final.
let pokemons = ["Bulbasaur", "Charmander", "Eevee", "Totodyle"]

pokemons.unshift("Squirtle")
pokemons.pop()
if (!pokemons.includes("Pikachu")){
    pokemons.push("Pikachu")
}
console.log(pokemons)

// 3. 
// Crie um array 'agentes' com os nomes ["Sage", "Jett", "Phoenix"]. Verifique se "Jett" está no array, descubra seu índice (pesquise como fazer isso se necessário) e substitua por "Raze". Retorne o array modificado.
let agentes = ["Sage", "Jett", "Phoenix"]

if (agentes.includes("Jett")){
    agentes.splice(agentes.indexOf("Jett"), 1, "Raze")
}
console.log(agentes)
// 4.
// Crie um array 'grifinoria' com os nomes ["Hermione", "Ron", "Neville"]. Remova o primeiro nome, adicione "Harry" ao início, e verifique se "Ron" está no array. Se sim, retorne todos os nomes em maiúsculas.
let grifinoria = ["Hermione", "Ron", "Neville"]

grifinoria.shift()
grifinoria.unshift("Harry")
if (grifinoria.includes("Ron")){
    grifinoria[0] = grifinoria[0].toUpperCase()
    grifinoria[1] = grifinoria[1].toUpperCase()
    grifinoria[2] = grifinoria[2].toUpperCase()
    console.log(grifinoria)
}

/* 5.
Você foi contratado pelo governo imperial para criar um sistema que gerencie a produção e distribuição de especiarias em Arrakis. O sistema deve permitir que o usuário insira o nome do líder da operação, o tipo de operação (CO para coleta, EX para extração, TR para transporte), e a quantidade de especiaria coletada em toneladas. Dependendo do tipo de operação e da quantidade de especiaria, o sistema deve calcular o valor total de lucro esperado, considerando os seguintes fatores:

    - Operações de coleta (CO) têm um lucro de 1000 solaris por tonelada.
    - Operações de extração (EX) têm um lucro de 2000 solaris por tonelada, mas se a quantidade for superior a 50 toneladas, o lucro por tonelada aumenta para 2500 solaris.
    - Operações de transporte (TR) têm um lucro de 1500 solaris por tonelada, mas se a quantidade for inferior a 20 toneladas, há uma taxa adicional de 500 solaris por tonelada.

O sistema deve imprimir o nome do líder, o tipo de operação, a quantidade de especiaria e o lucro total esperado.
*/

// CO 1000
// EX 2000 Q>50 2500
// TR 1500 Q>20 500/T

let nomeLider = ask.question("Qual e o nome do lider? ")
let tipoDeOperacao = ask.question("Qual e o tipo de operacao? ").toUpperCase()
let quantToneladas = ask.question("Qual e a quantidade de toneladas? ")
let lucro

switch(tipoDeOperacao){
    case "CO":
        lucro = 1000 * quantToneladas
        break
    case "EX":
        if(quantToneladas > 50){
            lucro = 2500 * quantToneladas
        } else {
            lucro = 2000 * quantToneladas
        }
        break
    default:
        if(quantToneladas < 20){
            lucro = 2000 * quantToneladas
        } else {
            lucro = 1500 * quantToneladas
        }
        break
}

if (tipoDeOperacao == "CO"){
    tipoDeOperacao = "coleta"
} else if (tipoDeOperacao == "EX"){
    tipoDeOperacao = "extração"
} else {
    tipoDeOperacao = "transporte"
}

console.log(`O nome do líder é ${nomeLider}, o tipo de operação é ${tipoDeOperacao}, a quantidade de especiaria é de ${quantToneladas} toneladas e o lucro total esperado é ${lucro} solaris.`)

// 6.
// Crie uma string 'nome' com o valor "  Alvo Dumbledore  ". Remova os espaços, transforme o nome para maiúsculas e retorne a quantidade de caracteres do nome.
let nome = "  Alvo Dumbledore  "
nome = nome.trim().toUpperCase()
console.log(nome.length)

//7.
// Crie um array 'naves' com os nomes ["X-Wing", "TIE Fighter", "Millennium Falcon"]. Remova a última nave, adicione "Star Destroyer" ao início do array, e verifique se "TIE Fighter" está no array.
let naves = ["X-Wing", "TIE Fighter", "Millennium Falcon"]
naves.pop()
naves.unshift("Star Destroyer")
if(naves.includes("TIE Fighter")){
    console.log("TIE Fighter está incluso no array")
} else {
    console.log("TIE Fighter não está incluso no array")
}

/*8.
Você foi contratado pela WOOHP para criar um sistema de planejamento de missões. Para cada missão, os detalhes incluem o nome da espiã, o tipo de missão (RE para resgate, IN para infiltração, DE para desativação) e o nível de risco da missão (AL para alto, ME para médio, BA para baixo). Dependendo da combinação do tipo de missão e do nível de risco, o sistema deve determinar o tempo estimado de conclusão e a quantidade de gadgets necessários:
    - Missões de resgate (RE) com alto risco (AL) levam 5 horas e requerem 4 gadgets, missões de risco médio (ME) levam 3 horas e requerem 3 gadgets, e de baixo risco (BA) levam 2 horas com 2 gadgets.
    - Missões de infiltração (IN) sempre levam 4 horas, mas o número de gadgets depende do risco: 5 gadgets para AL, 3 para ME e 2 para BA.
    - Missões de desativação (DE) têm um tempo fixo de 6 horas, independentemente do risco, mas o número de gadgets é 3 para AL, 2 para ME e 1 para BA.
O sistema deve imprimir o nome da espiã, o tipo de missão, o nível de risco, o tempo estimado de conclusão e a quantidade de gadgets necessários.
*/
let nomeEspia = ask.question("Qual e o nome da espia? ")
let tipoDeMissao = ask.question("Qual e o tipo de missao? ").toUpperCase()
let nivelDeRisco = ask.question("Qual e o nivel de risco da missao? ").toUpperCase()
let horas
let gadgets

switch(tipoDeMissao){
    case "RE":
        if (nivelDeRisco == "AL"){
            horas = 5
            gadgets = 4
        } else if (nivelDeRisco == "ME"){
            horas = 3
            gadgets = 3
        } else {
            horas = 2
            gadgets = 2
        }
        tipoDeMissao = "resgate"
        break
    case "IN":
        horas = 4
        if (nivelDeRisco == "AL"){
            gadgets = 5
        } else if (nivelDeRisco == "ME"){
            gadgets = 3
        } else {
            gadgets = 2
        }
        tipoDeMissao = "infiltração"
        break
    default:
        horas = 6
        if (nivelDeRisco == "AL"){
            gadgets = 3
        } else if (nivelDeRisco == "ME"){
            gadgets = 2
        } else {
            gadgets = 1
        }
        tipoDeMissao = "desativação"
        break
}

switch(nivelDeRisco){
    case "AL":
        nivelDeRisco = "alto"
        break
    case "ME":
        nivelDeRisco = "médio"
        break
    default:
        nivelDeRisco = "baixo"
        break
}

console.log(`O nome da espiã é ${nomeEspia}, o tipo de missão é de ${tipoDeMissao}, o nível de risco é ${nivelDeRisco}. O tempo estimado da conclusão é de ${horas} horas e a quantidade de gadgets necessários serão de ${gadgets} gadgets.`)

/*9.
Descrição do problema: Você foi contratado para desenvolver um sistema que organize e distribua missões ninjas em Konoha. Cada missão tem um líder ninja, um tipo de missão (A para missões de rank A, B para missões de rank B, C para missões de rank C), e uma região de destino (NV para nas vilas, FL para florestas, MO para montanhas). Dependendo da combinação de tipo de missão e região, o sistema deve determinar a dificuldade da missão e o pagamento total:
    - Missões de rank A nas vilas (NV) têm uma dificuldade "Alta" e um pagamento de 5000 ryous, nas florestas (FL) a dificuldade é "Muito Alta" e o pagamento é de 7000 ryous, e nas montanhas (MO) a dificuldade é "Extrema" com um pagamento de 10000 ryous.
    - Missões de rank B nas vilas têm uma dificuldade "Média" e um pagamento de 3000 ryous, nas florestas a dificuldade é "Alta" e o pagamento é de 5000 ryous, e nas montanhas a dificuldade é "Muito Alta" com um pagamento de 7000 ryous.
    - Missões de rank C nas vilas têm uma dificuldade "Baixa" e um pagamento de 1000 ryous, nas florestas a dificuldade é "Média" e o pagamento é de 3000 ryous, e nas montanhas a dificuldade é "Alta" com um pagamento de 5000 ryous.
O sistema deve imprimir o nome do líder ninja, o tipo de missão, a região, a dificuldade e o pagamento total.
*/

let liderNinja = ask.question("Qual e o nome do lider ninja? ")
let tipoDeMissao1 = ask.question("Qual e o tipo de missao? ").toUpperCase()
let regiaoDeDestino = ask.question("Qual e a regiao de destino? ").toUpperCase()
let ryous
let dificuldade

switch(tipoDeMissao1){
    case "A":
        if (regiaoDeDestino == "NV"){
            dificuldade = "alta"
            ryous = 5000
        } else if (regiaoDeDestino == "FL"){
            dificuldade = "muito alta"
            ryous = 7000
        } else {
            dificuldade = "extrema"
            ryous = 10000
        }
        break
    case "B":
        if (regiaoDeDestino == "NV"){
            dificuldade = "media"
            ryous = 3000
        } else if (regiaoDeDestino == "FL"){
            dificuldade = "alta"
            ryous = 5000
        } else {
            dificuldade = "muito alta"
            ryous = 7000
        }
        break
    default:
        if (regiaoDeDestino == "NV"){
            dificuldade = "baixa"
            ryous = 1000
        } else if (regiaoDeDestino == "FL"){
            dificuldade = "media"
            ryous = 3000
        } else {
            dificuldade = "alta"
            ryous = 5000
        }
        break
}

switch(regiaoDeDestino){
    case "NV":
        regiaoDeDestino = "vilas"
        break
    case "FL":
        regiaoDeDestino = "florestas"
        break
    default:
        regiaoDeDestino = "montanhas"
        break
}

console.log(`O nome do líder ninja é ${liderNinja}, o tipo de missão é de rank ${tipoDeMissao1}, a região é nas ${regiaoDeDestino}. A dificuldade é ${dificuldade} e o pagamento total é de ${ryous} ryous. `)