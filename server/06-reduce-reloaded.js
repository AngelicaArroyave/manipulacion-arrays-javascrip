// Output
// {
//     1: 2,
//     2: 1,
//     3: 1,
//     4: 3,
//     5: 5
// }

const numbers = [1, 1, 2, 3, 4, 4, 4, 5, 5, 5, 5, 5]

const numbersWithReduce = numbers.reduce((object, number) => {
    (!object[number]) ? object[number] = 1 : object[number] += 1

    return object
}, {})

console.log(numbersWithReduce); // { '1': 2, '2': 1, '3': 1, '4': 3, '5': 5 }

const data = [
    {
        name: 'Nicolas',
        level: 'low'
    },
    {
        name: 'Andrea',
        level: 'medium'
    },
    {
        name: 'Zulema',
        level: 'hight'
    },
    {
        name: 'Santiago',
        level: 'low'
    },
    {
        name: 'Valentina',
        level: 'medium'
    },
    {
        name: 'Lucia',
        level: 'hight'
    }
]

const levels = data
                .map(person => person.level)
                .reduce((object, number) => {
                    (!object[number]) ? object[number] = 1 : object[number] += 1

                    return object
                }, {})

console.log(levels); // { low: 2, medium: 2, hight: 2 }

// Devolver un objeto de acuerdo a la cantidad de elementos que se encuentren dentro de un rango
// 1-5, 6-10, 11-15

const rangeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const cont = rangeNumbers.reduce((object, number) => {
    if (number <= 5) object['1-5'] += 1
    if (number >= 6 && number <= 10) object['6-10'] += 1
    if (number >= 11 && number <= 15) object['11-15'] += 1

    return object
}, {
    '1-5': 0,
    '6-10': 0,
    '11-15': 0
})

console.log(cont); // { '1-5': 5, '6-10': 5, '11-15': 2 }