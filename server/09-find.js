const numbers = [1, 30, 49, 29, 30, 13]

let response = undefined
// Con for
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] === 30) response = numbers[i]
}

console.log(response); // 30 or undefined

const findNumber = numbers.find(number => number === 30)

console.log(findNumber); // 30 or undefined

const products = [
    {
        name: 'Pizza',
        price: 12,
        id: 1
    },
    {
        name: 'Burger',
        price: 23,
        id: 2
    },
    {
        name: 'Hot dog',
        price: 34,
        id: 3
    },
    {
        name: 'Hot cakes',
        price: 45,
        id: 4
    }
]

const findProduct = products.find(product => product.id === 3)
const findIndexProduct = products.findIndex(product => product.id === 3)

console.log(findProduct); // { name: 'Hot dog', price: 34, id: 3 }
console.log(findIndexProduct); // 2