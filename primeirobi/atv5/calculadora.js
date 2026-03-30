const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = valorConta * percentualGorjeta / 100;
const valorTotal = valorConta + valorGorjeta;

console.log(
    'Valor da conta: R$' + valorConta.toFixed(2) +
    '\nGorjeta (' + percentualGorjeta + '%): R$' + valorGorjeta.toFixed(2) +
    '\nTotal a pagar: R$' + valorTotal.toFixed(2)
);