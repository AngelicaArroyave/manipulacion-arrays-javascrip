const numbers = [1, 30, 49, 29, 10, 13]

let flag = true

// Con for
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] <= 40) flag = false
}

console.log(flag); // false

// Con every
const response = numbers.every(number => number <= 50)

console.log(response); // true

const team = [
    {
        name: 'nicolas',
        age: 12
    },
    {
        name: 'Andrea',
        age: 8
    },
    {
        name: 'Zulma',
        age: 2
    },
    {
        name: 'Santiago',
        age: 18
    }
]

const validateAge = (team) => {
    const ages = team.map(person => person.age)
    const flag = ages.every(age => age <= 15)
    const phrase = (flag === true) ? 'Puede ingresar el equipo al campeonato' : 'Hay una persona mayor a la edad permitida para el campeonato'
    
    return phrase
}

console.log('Validación para ingreso a campeonato: ', validateAge(team)); // Hay una persona mayor a la edad permitida para el campeonato