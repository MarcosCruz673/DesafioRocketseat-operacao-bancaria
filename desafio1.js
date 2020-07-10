// Operações bancárias

const user = {
    Nome: "Marcos",
    transicoes:[],
    balance: 0
}

//Adcionar Transação
function criarTransacao(transicao){
    user.transicoes.push(transicao)

    if(transicao.tipo === 'credito'){
        user.balance = user.balance + transicao.valor
    }else{
        user.balance = user.balance - transicao.valor
    }
}

//Mostra um valor mais alto de determino tipo, Crédito ou Débito
function valorMaisAltoPorTipo(tipo){
    let higherTransaction
    let highervalor = 0

    for (let transicao of user.transicoes){
        if(transicao.tipo == tipo && transicao.valor > highervalor){
            highervalor = transicao.valor
            higherTransaction = transicao
        }
    }

    return higherTransaction
}

//Faz a média dos valores tanto de crédito e débito
function valorMedioTransicoes(){
    let sum = 0
    for (let transicao of user.transicoes){
        sum += transicao.valor
    }

    return sum / user.transicoes.length
}

//Conta a quantidade de transações feita sendo ela crédito ou débito
function contarTransicoes(){
    let count = {
        credito: 0,
        debito: 0
    }
    for(let transicao of user.transicoes){
        if(transicao.tipo === 'credito'){
            count.credito++
        }else{
            count.debito++
        }
    }

    return count
}

//Criando Transições
criarTransacao({tipo: 'credito', valor:70})
criarTransacao({tipo: 'debito', valor:30})
criarTransacao({tipo: 'credito', valor:20})
criarTransacao({tipo: 'debito', valor:40})
criarTransacao({tipo: 'credito', valor:130})

console.log(`${user.Nome} seu saldo é de: ${user.balance}`)

console.log(valorMaisAltoPorTipo('credito'))
console.log(valorMaisAltoPorTipo('debito'))

console.log(`A média de suas transições é de`,valorMedioTransicoes())

console.log(`${user.Nome}, você ao todo movimentou um total de:`,contarTransicoes('credito'))