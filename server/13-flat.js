const matriz = [
    [1, 2, 3, 4, [1, 2, 3, [1, 2, 3]]],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

// Con for
const array = []
for (let i = 0; i < matriz.length; i++) {
    const newArray = matriz[i]
    for (let j = 0; j < newArray.length; j++) {
        array.push(matriz[i][j])
    }
}

console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// const arrayWithFlat = matriz.flat() // [ 1, 2, 3, 4, [ 1, 2, 3, [ 1, 2, 3 ] ], 5, 6, 7, 8, 9, 10, 11, 12 ]
const arrayWithFlat = matriz.flat(3) // [ 1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12 ]
console.log(arrayWithFlat);