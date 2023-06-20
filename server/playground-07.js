// Tu reto es retornar un array solo con las palabras que cumplan con la condición de tener un término de búsqueda dado
// Para solucionarlo vas a encontrar una función llamada 'filterByTerm' que recibe los siguientes parámetros de entrada
// array: Un arrat de string con palabras
// term: Un string con el término a buscar
// Input: array -> ['ana', 'santi', 'nico', 'anastasia'], term -> 'ana'
// Output: ['ana', 'anastasia']
// Input: array -> ['ana', 'santi', 'nico', 'anastasia'], term -> 'xyz'
// Output: []

const names = ['ana', 'santi', 'nico', 'anastasia']
const term = 'xyz'

const validateName = (names, term) => {
    return names.filter(name => {
        return name.includes(term)
    })
}

console.log(validateName(names, term));