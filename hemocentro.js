// < Variáveis >

const ask = require("readline-sync")
const doadores = []
let programaAtivo = true
let opcaoUsuario

// O programa começa criando um array e variáveis. "programaAtivo" define se o código continua rodando ou não e "opcaoUsuario" receberá um valor na função "introducao".

// < Funções >

// -- Cores --

function cor(cor, string) {
    let codigo

    switch(cor.toLowerCase()) {
        case "vermelho":
            codigo = 31
            break
        case "verde":
            codigo = 32
            break
        case "amarelo":
            codigo = 33
            break
        case "roxo":
            codigo = 35
            break
        case "azul":
            codigo = 36
            break
    }
    return `\x1b[${codigo}m${string}\x1b[0m`
}
//Essa função permite colorir strings imprimidas no terminal

// -- Opções --

function introducao() {
    console.clear()
    console.log(cor("azul", `        |_______________________           
|_______|  |  |  |  |  |  |  |  |__        
|_______|  6  5  4  3  3  2  1  |__|-------
|       |_______________________|          
        |   
        `))
    console.log(cor("roxo", "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE ====="))
    console.log(cor("amarelo", `1. Cadastrar doador
2. Listar doadores
3. Buscar doador por tipo sanguíneo
4. Buscar doador por data da última doação
5. Sair
        `))
    opcaoUsuario = ask.question(cor("verde", "Escolha uma opcao: "))
    if (opcaoUsuario != "") {
        opcaoUsuario = Number(opcaoUsuario)
    }
}
// Essa função imprime as introduções e recebe a opção do usuário

function cadastrarDoador() {
    console.clear()
    console.log(cor("verde", `╔════════════════════╗
║ Banrisul Carlinhos ║
╟────────────────────╢
║ 183.138.49.36      ║
║          CVV: 012  ║
╚════════════════════╝
`))

    let nomeDoador = ask.question(cor("azul", "Digite o nome do doador: "))
    let idadeDoador = ask.question(cor("azul", "Digite a idade do doador: "))
    let pesoDoador = ask.question(cor("azul", "Digite o peso do doador: "))
    let tipoSanguineoDoador = ask.question(cor("azul", "Digite o tipo sanguineo do doador: ")).toUpperCase()
    let UltimaDoacaoDoador = ask.question(cor("azul", "Digite a data da ultima doacao do doador: "))
    doadores.push({
        nome: nomeDoador,
        idade: idadeDoador,
        peso: pesoDoador,
        tipoSanguineo: tipoSanguineoDoador,
        ultimaDoacao: UltimaDoacaoDoador
    })
}
// A função "cadastrarDoador" é responsável por adicionar um novo doador com base nos dados recebidos pelo usuário

function listarDoadores() {
    console.clear()

    console.log(cor("roxo", `        _______________
    ()==(              (@==()
         '______________'|
           |             |
           |             |
         __)_____________|
    ()==(               (@==()
         '--------------'
         `))
    console.log(cor("azul", `--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`))
    for(let doador of doadores) {
        console.log(cor("azul", `${doador.nome.padEnd(17 - doador.nome.length)} |   ${doador.idade.padEnd(4 - doador.idade.length)} |   ${doador.peso.padEnd(3 - doador.peso.length)} | ${"".padEnd(5)} ${doador.tipoSanguineo.padEnd(9 - doador.tipoSanguineo.length)} |    ${doador.ultimaDoacao}`))
    }

    console.log(cor("azul", "-----------------------------------------------------------------"))
}
// A função acima exibe todos os doadores em forma de lista

function buscarDoadorTipoSanguineo() {
    console.clear()

    console.log(cor("vermelho", `         ▓▓      
        ▓▓▓▓      
        ▓▓▓▓      
      ▓▓▓▓▓▓▓▓    
      ▓▓▓▓▓▓▓▓    
    ██████▓▓▓▓▓▓  
  ████████▓▓▓▓▓▓▓▓
  ▓▓████▓▓▓▓▓▓▓▓▒▒
  ▓▓▓▓▓▓▓▓▓▓▓▓▒▒▒▒
  ▓▓▓▓▓▓▓▓▓▓▒▒▒▒▒▒
    ▓▓▓▓▓▓▒▒▒▒▒▒  
      ▓▓▒▒▒▒▒▒  
      `))

    let tipoSanguineo = ask.question(cor("roxo", "Digite o tipo sanguineo desejado: ")).toUpperCase()
    let totalEncontrado = 0

    console.log(cor("verde", `------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`))

    for(let doador of doadores) {
        if (doador.tipoSanguineo == tipoSanguineo || doador.tipoSanguineo == tipoSanguineo + "+" || doador.tipoSanguineo == tipoSanguineo + "-") {
            totalEncontrado += 1
            console.log(cor("verde", `${doador.nome.padEnd(17 - doador.nome.length)} |   ${doador.idade.padEnd(4 - doador.idade.length)} |   ${doador.peso.padEnd(3 - doador.peso.length)} | ${"".padEnd(5)} ${doador.tipoSanguineo.padEnd(9 - doador.tipoSanguineo.length)} |    ${doador.ultimaDoacao}`))
        }
    }

    if (totalEncontrado == 0) {
        console.log(cor("vermelho", "Tipo sanguineo não encontrado ou inexistente."))
    }

    console.log(cor("verde", "-----------------------------------------------------------------"))
}
// A função "buscarDoadorTipoSanguineo" procura doadores com o tipo sanguíneo definido pelo usuário e retorna os valores em uma lista. Caso não encontre nada, imprime uma mensagem informando que o tipo não foi encontrado ou não existe.

function buscarDoadorUltimaDoacao() {
    console.clear()

    console.log(cor("azul", `╔════════════════════╗
║ October ░░░░░ 2024 ║
╟──┬──╔══╗──┬──┬──┬──╢
║░░│░░║01║02│03│04│05║
╟──┼──╚══╝──┼──┼──┼──╢
║06│07│08│09│10│11│12║
╟──┼──┼──┼──┼──┼──┼──╢
║13│14│15│16│17│18│19║
╟──┼──┼──┼──┼──┼──┼──╢
║20│21│22│23│23│24│25║
╟──┼──┼──┼──┼──┼──┼──╢
║26│27│28│29│30│31│░░║
╚════════════════════╝
`))

    let ultimaDoacao = ask.question(cor("roxo", "Digite a data desejada (dd/mm/aaaa): "))
    let data = ultimaDoacao.split("/")
    
    if (!ultimaDoacao.includes("/") || !data[2] || (Number(data[0]) > 31 || Number(data[1]) > 12)) {
        console.log(cor("vermelho", "Data inválida."))
        return
    }

    console.log(cor("verde", `------------------------
RESULTADO DA BUSCA:
------------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------`))

    for(let doador of doadores) {
        let condicao = false

        if (doador.ultimaDoacao.split("/")[2] < data[2]) {
            condicao = true
        }

        if (doador.ultimaDoacao.split("/")[2] == data[2] && doador.ultimaDoacao.split("/")[1] < data[1]) {
            condicao = true
        }

        if (doador.ultimaDoacao.split("/")[2] == data[2] && doador.ultimaDoacao.split("/")[1] == data[1] && doador.ultimaDoacao.split("/")[0] <= data[0]) {
            condicao = true
        }

        if (condicao) {
            console.log(cor("verde", `${doador.nome.padEnd(17 - doador.nome.length)} |   ${doador.idade.padEnd(4 - doador.idade.length)} |   ${doador.peso.padEnd(3 - doador.peso.length)} | ${"".padEnd(5)} ${doador.tipoSanguineo.padEnd(9 - doador.tipoSanguineo.length)} |    ${doador.ultimaDoacao}`))
        }
    }

    console.log(cor("verde", "-----------------------------------------------------------------"))
}
// A função "buscarDoadorUltimaDocao" é responsável por procurar cada doador e comparar a data de sua última doação com a data inserida pelo usuário, caso ela venha antes, irá ser listada, senão, ela não é imprimida.

// < Programa >

while(programaAtivo) {

    introducao()

    switch(opcaoUsuario) {
        case 1:
            cadastrarDoador()
            break
        case 2:
            listarDoadores()
            break
        case 3:
            buscarDoadorTipoSanguineo()
            break
        case 4:
            buscarDoadorUltimaDoacao()
            break
        case 5:
            console.log(cor("vermelho", "Encerrando o sistema..."))
            programaAtivo = false
            break
        default:
            console.log(cor("vermelho", "Opção não encontrada."))
            break
    }

    if (programaAtivo) {
        ask.question(cor("amarelo", "Pressione ENTER para continuar. "))
    }
}
// O loop while terá a tarefa de, enquanto o usuário não decidir sair do programa, repetir o menu inicial. A partir da opção do usuário, ele irá definir que função será ativa, ou se irá encerrar o programa.