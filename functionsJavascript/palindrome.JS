function palindrome(palabra) {
    const palabraFormateada = palabra.toLowerCase().replace(/[\W_]/g, '');

    return palabraFormateada === palabraFormateada.split('').reverse().join('');
}
  

console.log(palindrome("Anita lava la tina"));
console.log(palindrome("Hola MUNDO"));
console.log("--------------------------------------")