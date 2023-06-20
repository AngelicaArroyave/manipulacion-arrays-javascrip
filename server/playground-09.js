// En este desafío tienes un array de string y  cada línea es un fragmento, el Zen de Python, tu reto es hacer un
// método que retrorne el número de palabras totales que tiene el array
// Para solucionarlo vas a encontrar una función llamada 'countWords' que tiene un parámetro de entrada:
// array: Un array de frases
// Input: [
//     "Beautiful is better than ugly",
//     "Explicit is better than implicit",
//     "Simple is better than complex",
//     "Complex is better than complicated"
// ]
// Output: 20

const array = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated"
]

const newString = array.join(' ')
console.log(newString);

const newArray = newString.split(' ')
console.log(newArray);

const sizeNewArray = newArray.length
console.log(sizeNewArray);

// En una sola línea quedaría
const sizeArray = array.join(' ').split(' ').length
console.log(sizeArray);

// Con flatmap
const arrayWithFlatMap = array.flatMap(line => line.split(' ')).length
console.log(arrayWithFlatMap);