function  wordCounter (phrase) {
    const words = phrase.split(' ');
  
    // fileter array, eliminar espacios vacíos
    const filteredWords = words.filter(words => words !== '');
  
    // Retornamos la cantidad de palabras
    return filteredWords.length;
  };
  
  console.log(wordCounter("Hola, Hello, Hallo, bonne journee ¿cómo estás hoy?"));
  console.log("--------------------------------------")