const numbers = [1, 2, 3, 4, 5, 6, 7]

// Con un for
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum); // 28

// Con reduce
let acumulate = 0
const total = numbers.reduce((acumulate, number) => acumulate + number, 0) // El 0 es el estado inicial de acumulate, por cada ciclo se incrementa en 1

console.log(total); // 28

const reducedValue = numbers.reduce((acumulate, number) => acumulate + number**2, 0)

console.log(reducedValue); // 140