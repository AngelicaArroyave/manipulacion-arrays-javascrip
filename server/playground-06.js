// Tu reto es retornar si dentro de un array de números todos son pares, para solucionarlo vas a encontrar una función
// llamada 'checkArray' que recibe un parámetro de entrada:
// numbers: Un array de números
// Input: [2, 4, 6, 8, 10]
// Output: true
// Input: [1, 3, 5, 7, 10, 11]
// Output: false
// Input: [1, 3, 5]
// Output: false
// Input: []
// Output: false

const numbers = [-2, 4, 6, 8, 10]
// const numbers = []

const validateNumbers = (numbers) => {
    return (numbers.length > 0) ? numbers.every(number => number % 2 === 0) : false
}

console.log(validateNumbers(numbers));