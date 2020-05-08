const notas = [5, 8, 9, 10];

exports.mediaNotas = () => {
    let soma = 0
    notas.forEach(element => {
        soma = element + soma
    });
    return soma / notas.length
}