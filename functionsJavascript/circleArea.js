function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
  }

let num1 = parseInt(process.argv[2]);

console.log(`El area del circulo con radio ${num1} es:`, calcularAreaCirculo(num1));
console.log("--------------------------------------")