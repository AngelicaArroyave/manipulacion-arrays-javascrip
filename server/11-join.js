const elements = ['Fire', 'Air', 'Water']

let phrase = ''
const separator = '--'
// Con for
for (let i = 0; i < elements.length; i++) {
    (i < elements.length - 1) ? phrase += elements[i] + separator : phrase += elements[i]
}

console.log(phrase);

// Con join
const phraseFinal = elements.join('--')
console.log(phraseFinal);

const title = 'Curso de manipulación de arrays'
const titleArray = title.split(' ')
console.log(titleArray);

const titleWithJoin = titleArray.join('-')
console.log(titleWithJoin);