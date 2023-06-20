const numbersOne = [1, 2, 3, 4]
const numbersTwo = [5, 6, 7, 8]

// Con for
const numbersFinal = [...numbersOne]
for (let i = 0; i < numbersTwo.length; i++) {
    numbersFinal.push(numbersTwo[i])
}

console.log(numbersFinal);

const numbers = numbersOne.concat(numbersTwo) // Concat
const numbers2 = [...numbersOne, ...numbersTwo] // Spread Operator
console.log(numbers);
console.log(numbers2);
// Adicionar los valores de numbersTwo en el array original numbersOne
numbersOne.push(...numbersTwo)
console.log(numbersOne);