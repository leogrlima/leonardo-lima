let nomeCompleto = "Leonardo da Graça Lima"
let tipoDeJogo = "DO"
let etapaDoJogo = "SF"
let categoria = 2
let quantIngressos = 3
let preco

switch(categoria){
    case 1:
        if (etapaDoJogo = "SF"){
            preco = 1320
        } else if (etapaDoJogo = "DT"){
            preco = 660
        } else {
            preco = 1980
        }
        break
    case 2:
        if (etapaDoJogo = "SF"){
            preco = 880
        } else if (etapaDoJogo = "DT"){
            preco = 440
        } else {
            preco = 1320
        }
        break
    case 3:
        if (etapaDoJogo = "SF"){
            preco = 550
        } else if (etapaDoJogo = "DT"){
            preco = 330
        } else {
            preco = 880
        }
        break
    default:
        if (etapaDoJogo = "SF"){
            preco = 220
        } else if (etapaDoJogo = "DT"){
            preco = 170
        } else {
            preco = 330
        }
        break
}

switch(tipoDeJogo) {
    case "IN":
        preco *= 4,10
        tipoDeJogo = "internacional"
        break
    default:
        tipoDeJogo = "doméstico"
        break
}

if (etapaDoJogo = "SF"){
    etapaDoJogo = "semifinal"
} else if (etapaDoJogo = "DT"){
    etapaDoJogo = "da decisão de 3º lugar"
} else {
    etapaDoJogo = "final"
}

console.log(`O nome do usuário é ${nomeCompleto}, ele irá comprar ${quantIngressos} ingressos para um jogo ${tipoDeJogo}, na etapa ${etapaDoJogo} da Categoria ${categoria}. O valor unitário deste ingresso será de R$ ${preco},00, o valor total será R$ ${preco*quantIngressos},00.`)