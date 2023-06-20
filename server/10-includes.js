const pets = ['cat', 'dog', 'bat']

let flag = false
// Con for
for (let i = 0; i < pets.length; i++) {
    if(pets[i] === 'bat') flag = true
}

console.log(flag); // true

const validatePet = pets.includes('dog')

console.log(validatePet); // true