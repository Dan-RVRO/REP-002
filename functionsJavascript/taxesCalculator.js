function taxesCalculator(monto, porcentaje) {
    return impuestos = monto * (porcentaje / 100);
  }
  
console.log(process.argv[2], process.argv[3]);

let monto = parseInt(process.argv[2]);
let porcentaje = parseInt(process.argv[3]);

  console.log(`De impuestos es: $${taxesCalculator(monto, porcentaje)}$ basado en ${monto} y porcentaje de ${porcentaje}%`);
  