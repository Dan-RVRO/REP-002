function factorial(num1) {
    if (num1 === 0 || num1 === 1) {
      return 1;
    }
    return num1 * factorial(num1 - 1);
  }
  

console.log(process.argv[2], process.argv[3]);

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

console.log(`El factorial de ${process.argv[2]} es:`, factorial(num1));
console.log("--------------------------------------")