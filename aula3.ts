// Calcular a area quadrado, recebendo valores pro teclado
console.clear ()
let teclado = require (`prompt-sync`)();

/*
let lUm: number = 0;
let lDois: number = 0;
*/

let lUm: number = parseInt(teclado(`Digite o valor do lado um: `));
let lDois: number = parseInt(teclado(`Digite o valor do lado dois: `));

let area: number = (lUm * lDois);

console.log(`A área do quadrado calculando ${lUm} x ${lDois} = ${area}`);