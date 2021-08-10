const Calculadora = require('./Calculadora');
const NascimentoCal = require('./NascimentoCal');

const express = require('express');

const server = express();

{
  const stacks = [
    {
      nome: 'IvisonVinicyus',
      note: 8
    },
    {
      nome: 'Java',
      note: 8
    },
    {
      nome: 'Node',
      note: 10
    },
    {
      nome: 'SQL',
      note: 9
    }
  ];
  server.listen(3333, () => {
    console.log("Server online on port 3333!");

     /*Calculadora
  console.log('Calculadora');
  console.log(Calculadora.adi(10, 20));
  console.log(Calculadora.div(20, 10));
  console.log(Calculadora.sub(10, 20));
  console.log(Calculadora.mul(10, 20));*/


 //Filtro 3º
  console.log('3º) Filtro');
  const filter = stacks.filter(item => item.note >= 9);
  console.log(filter);

 //Calculadora de Idade
  console.log('1º) Calculadora de Idade');
  console.log(NascimentoCal.calcularIdade(2021, 1999));

 //Filtro 2º
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const Par = array.filter( stacks => stacks%2 == 0);
  console.log('2º) Números Pares do Array: '+Par);
  })
}