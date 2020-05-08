const pessoasController = require('./controllers/pessoasController')
const notas = require('./controllers/notasController')

// 1. Escreva uma função que retorne somente as mulheres maiores de 18 anos
//console.log(pessoasController.mulheresMaiores18())
console.log('------------------------------------------------------------------')

// 2. Escreva uma função que retorne se existe uma pessoa com exatamente 15 anos
console.log(pessoasController.pessoa15anos())
console.log('------------------------------------------------------------------')

// 3. Escreva uma função que relacione as pessoas com as profissões
console.log(pessoasController.pessoasProfissoes())
console.log('------------------------------------------------------------------')

//4. Escreva uma função que retorne somente o nome e a idade das pessoas sem profissão
console.log(pessoasController.pessoasSemProfissoes())
console.log('------------------------------------------------------------------')

// 5. Escreva uma função que retorne a médias das notas
console.log(notas.mediaNotas())
console.log('------------------------------------------------------------------')

// 6. Faça uma função que remova os carros de cor branca da lista e a retorne.
