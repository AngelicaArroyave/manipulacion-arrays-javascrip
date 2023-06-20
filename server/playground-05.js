// Tu reto es retornar 'true' si dentro de un array de números al menos un oes un número par, para solucionarlo vas
// a encontrar una función llamada 'checkarray' que recibe un parámetro de entrada:
// numbers: Un array de números
// Input: [1, 3, 5, 7, 10, 11]
// Output: true
// Input: [1, 3, 5]
// Output: false
// Input: []
// Output: false

const numbers = [1, 3, 5, 7, 10, 11]

const validate = numbers.some(number => number % 2 === 0)

console.log(validate);