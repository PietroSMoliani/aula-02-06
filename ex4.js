let outroArray = [];

let retornoUnshift1 = outroArray.unshift("Primeiro");
console.log("Retorno do unshift:", retornoUnshift1);
console.log("Array após o unshift 1:", outroArray);

let retornoUnshift2 = outroArray.unshift("Segundo");
console.log("Retorno do unshift:", retornoUnshift2);
console.log("Array após o unshift 2:", outroArray);


let valorRemovidoShift1 = outroArray.shift();
console.log("Valor removido com shift:", valorRemovidoShift1);
console.log("Array após o shift 1:", outroArray);

let valorRemovidoShift2 = outroArray.shift();
console.log("Valor removido com shift:", valorRemovidoShift2);
console.log("Array após o shift 2:", outroArray);
