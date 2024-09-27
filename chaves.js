const ask = require("readline-sync")
const moradores = []
const objetos = []
let programaAtivo = true
let opcaoUsuario

function introducao() {
    console.log(`
Bem vindo a vila!
Como deseja prosseguir?
    
[1] - Investigar o ladrão
[2] - Cadastrar novo morador
[3] - Visualizar moradores 
[4] - Adicionar objeto
[5] - Visualizar objetos
[0] - Sair
        `)
    opcaoUsuario = Number(ask.question("-----> "))
}

function cadastrarMorador() {
    console.clear()
    let nomeMorador = ask.question("Digite o nome do morador: ")
    let nomePersonagem = {
        nome: nomeMorador,
        ladrao: false
    }
    moradores.push(nomePersonagem)
    console.log(`Morador ${nomeMorador} adicionado!`)
}

function cadastrarObjeto() {
    console.clear()
    let nomeObjeto = ask.question("Digite o nome do objeto: ")
    objetos.push(nomeObjeto)
    console.log(`Objeto ${nomeObjeto} adicionado!`)
}

function escolherLadrao() {
    console.clear()
    for(let morador of moradores){
        morador.ladrao = false,
        morador.objetoRoubado = null
    }
    if (moradores.length > 0 && objetos.length > 0) {
        let moradorAleatorio = Math.floor(Math.random() * moradores.length)
        let objetoAleatorio = Math.floor(Math.random() * objetos.length)
        moradores[moradorAleatorio].ladrao = true
        moradores[moradorAleatorio].objetoRoubado = objetos[objetoAleatorio]
    } else {
        //console.log("Não há moradores ou objetos suficientes! Senhor Barriga expulsou geral :(")
    }
}

function investigarLadrao(){
    let culpado = null
    for(let suspeito of moradores) {
        if(suspeito.ladrao){
            culpado = suspeito.nome
        }
    }
    return culpado
}

function visualizarMoradores() {
    console.clear()
    for(let morador of moradores) {
        console.log(morador.nome)
    }
}

function visualizarObjetos() {
    console.clear()
    console.log(objetos)
}

while(programaAtivo) {

    introducao()

    switch(opcaoUsuario) {
        case 1:
            escolherLadrao()
            let culpado = investigarLadrao()
            if (typeof culpado == "string") {
                console.log(`O morador ${culpado} roubou ${moradores[culpado].objetoRoubado}!`)
            } else {
                console.log("Não há ladrões!")
            }
            break
        case 2:
            cadastrarMorador()
            break
        case 3:
            visualizarMoradores()
            break
        case 4:
            cadastrarObjeto()
            break
        case 5:
            visualizarObjetos()
            break
        case 0:
            programaAtivo = false
            break
    }
    ask.question(`Pressione ENTER para continuar. `)
}