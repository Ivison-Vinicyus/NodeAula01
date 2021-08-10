const adicionar = (numero1, numero2) => numero1 + numero2;

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

const multiplicar = (numero1, numero2) => numero1 * numero2;

const subtrair = (numero1, numero2) => numero1 - numero2;

module.exports.adi = adicionar;
module.exports.div = dividir;
module.exports.mul = multiplicar;
module.exports.sub = subtrair;
