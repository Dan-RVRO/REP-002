function suma(num1, num2) {
    return num1 + num2;
}

console.log(process.argv[2], process.argv[3]);

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

console.log(`La Suma de ${num1} + ${num2} es:`, suma(num1, num2));
console.log("--------------------------------------")
