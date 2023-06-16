// Tienes un array de números y tu reto es retornar la suma de todos loa valores en él.
// Para solucionarlo vas a encontrar una función llamada 'calcSum' que recibe un parámetro de entrada:
// numbers: Un array de números
// Input: [1, 1, 1]
// Output: 3
// Input: [2, 4, 8]
// Output: 14
// Input: []
// Output: 0

const numbers = [2, 4, 8]

const sum = numbers.reduce((cont, number) => cont + number, 0)

console.log(sum);