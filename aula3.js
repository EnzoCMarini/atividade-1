// Calcular a area quadrado, recebendo valores pro teclado
console.clear();
var teclado = require("prompt-sync")();
/*
let lUm: number = 0;
let lDois: number = 0;
*/
var lUm = parseInt(teclado("Digite o valor do lado um: "));
var lDois = parseInt(teclado("Digite o valor do lado dois: "));
var area = (lUm * lDois);
console.log("A \u00E1rea do quadrado calculando ".concat(lUm, " x ").concat(lDois, " = ").concat(area));
