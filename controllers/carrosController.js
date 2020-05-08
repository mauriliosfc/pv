const carros = require('../models/carros')

exports.removeBranco = () => {
    carrosNbrancos = []
    carros.map(item => {
        if (item.cor != 'branco')
            carrosNbrancos.push(item)
    })

    return carrosNbrancos
}