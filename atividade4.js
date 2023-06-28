// 1º)
// a) Armazenar os valores
// b) As variáveis são do tipo objeto Number
var valor1 = new Number(7);
var valor2 = new Number(-55);
var valor3 = new Number(389);
var valor4 = new Number(1000);
var valor5 = new Number(3.1459);
var valor6 = new Number(-46.267);

// c) Mostrar os valores no console
console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);
console.log(valor6);

// d) Somar a primeira variável com a última variável
var soma = valor1 + valor6;

// e) Mostrar os valores no console
console.log("Soma: " + soma);

// f) Multiplicar a primeira variável com a terceira variável
var multiplicacao = valor1 * valor3;

// g) Mostrar os valores no console
console.log("Multiplicação: " + multiplicacao);

// h) Dividir a quarta variável pela quinta variável
var divisao = valor4 / valor5;

// i) Mostrar os valores no console
console.log("Divisão: " + divisao);

// 2º)
// a) Armazenar os valores: 10, 3, 9, 99.9, 721;
// b) As variáveis deverão ser do tipo objeto Number.
var valor1 = new Number(10);
var valor2 = new Number(3);
var valor3 = new Number(9);
var valor4 = new Number(99.9);
var valor5 = new Number(721);

// c) Mostrar os valores no console.
console.log(valor1);
console.log(valor2);
console.log(valor3);
console.log(valor4);
console.log(valor5);

// d) Validar se a primeira variável é menor que o valor Number.MAX_VALUE;
var maxvalue = valor1 < Number.MAX_VALUE;

// e) Mostrar o resultado e valores no console
console.log(maxvalue);

// f) Validar se a segunda variável possui valor igual a NaN
var valorNan = valor2 == Number.NaN;

// g) Mostrar o resultado e valores no console
console.log(valorNan);

// h) Validar se a quinta variável é menor ou igual a terceira variável
var menorigual = valor5 <= valor3;

// i) Mostrar o resultado e valores no console
console.log(menorigual);
