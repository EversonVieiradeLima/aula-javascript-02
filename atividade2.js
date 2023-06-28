// 1º)
// a)
var x = 5;
var y = 8;
console.log(x === y);

// b)
var x = 6;
var y = "6";
console.log(x !== y);

// c)
var x = "7";
var y = 7;
console.log(x == y);

// 2º)
var nome;
nome = "Fulano";
console.log("Boa noite " + nome + "!");

// 3º)
var x = 10;
var y = 5;

//Executar um console por vez sozinho
//console.log((x += y)); // x = x + y -> x = 15
//console.log((x *= y)); // x = x * y -> x = 50
//console.log((x %= y)); // x = x % y -> x = 0
//console.log((x /= y)); // x = x / y -> x = 2
console.log((x -= y)); // x = x - y -> x = 5
