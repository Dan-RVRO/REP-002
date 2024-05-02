function evenNumbersFilter (array) {
    return array.filter(numero => {return numero % 2 === 0;});
  };
  
  console.log(evenNumbersFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20]));
  console.log("--------------------------------------")
  