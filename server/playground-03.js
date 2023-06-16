// Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan
// con la condición de tener 4 o más letras.
// Para solicionarlo vas a encontrar una función llamada 'filterByLength' que recibe un parámetro de entrada:
// array: Un array de string con palabras
// Input: ['amor', 'sol', 'piedra', 'día']
// Output: ['amor', 'piedra']
// Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
// Output: ['rosa'. 'gafas']

const words = ['rosa', 'gol', 'pez', 'día', 'gafas']

const wordsLength = words.filter(word => word.length >= 4)

console.log(wordsLength);