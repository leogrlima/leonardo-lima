const ask = require("readline-sync")
const moradores = []
const objetos = []
let programaAtivo = true
let opcaoUsuario

function introducao() {
    console.clear()
    console.log(`
Bem vindo a vila!
Como deseja prosseguir?
    
[1] - Cadastrar novo morador
[2] - Adicionar objeto
[3] - Investigar o ladrão 
[4] - Visualizar moradores
[5] - Visualizar objetos
[0] - Sair
        `)
    opcaoUsuario = ask.question("-----> ")
    if (opcaoUsuario != "") {
        opcaoUsuario = Number(opcaoUsuario)
    }
}

function cadastrarMorador() {
    console.clear()
    let nomeMorador = ask.question("Digite o nome do morador: ")
    let nomePersonagem = {
        nome: nomeMorador,
        ladrao: false,
        objetoRoubado: null
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
    }
}

function investigarLadrao(){
    let culpado = undefined
    for(let suspeito of moradores) {
        if(suspeito.ladrao){
            culpado = suspeito
        }
    }
    return culpado
}

function visualizarMoradores() {
    console.clear()
    console.log("Lista de Moradores:")
    for(let morador of moradores) {
        console.log(morador.nome)
    }
    console.log("_______________")
}

function visualizarObjetos() {
    console.clear()
    console.log("Lista de Objetos:")
    for(let objeto of objetos) {
        console.log(objeto)
    }
    console.log("_______________")
}

while(programaAtivo) {

    introducao()

    switch(opcaoUsuario) {
        case 1:
            cadastrarMorador()
            break
        case 2:
            cadastrarObjeto()
            break
        case 3:
            escolherLadrao()
            let culpado = investigarLadrao()
            if (typeof culpado != "undefined") {
                console.log(`O morador ${culpado.nome} roubou ${culpado.objetoRoubado}!`)
            } else {
                console.log("Não há moradores ou objetos suficientes!")
            }
            break
        case 4:
            visualizarMoradores()
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