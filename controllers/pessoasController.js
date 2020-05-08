const pessoas = require('../models/pessoas')
const profissoes = require('../models/profissoes')

exports.mulheresMaiores18 = () => {
    let maiores18 = []
    pessoas.map(item => {
        if (item.idade > 18 && item.sexo == 'F')
            return maiores18.push(item)
    })

    return maiores18
}

exports.pessoa15anos = () => {
    pessoas15 = 0
    pessoas.map(item => {
        if (item.idade == 15)
            pessoas15 = pessoas15 + 1
    })

    return `Existem ${pessoas15} pessoas com 15 anos`
}

exports.pessoasProfissoes = () => {

    let pessoasProfissoes = pessoas.map(item => {
        item.profissao = profissoes.find(e => e.pessoaId == item.id)
        return item
    })

    return pessoasProfissoes
}

exports.pessoasSemProfissoes = () => {
    let pessoasProfissoes = []
    pessoas.map(item => {
        item.profissao = profissoes.find(e => e.pessoaId == item.id)
        if (item.profissao == undefined)
            pessoasProfissoes.push({ nome: item.nome, idade: item.idade })
    })

    return pessoasProfissoes
}