const months = ['March', 'January', 'February', 'December']
months.sort() // Lo ordena de acuerdo al abecesario
console.log(months); // [ 'December', 'February', 'January', 'March' ]

const numbers = [1, 30, 4, 21, 100000]
numbers.sort() // Lo ordena por order del primer número
console.log(numbers); // [ 1, 100000, 21, 30, 4 ]
numbers.sort((a, b) => a - b) // De forma ascendente se coloca a - b y al contrario b - a descendente
console.log(numbers); // [ 1, 4, 21, 30, 100000 ]

const words = ['Jungle', 'Car', 'Premier', 'Café', 'Apple']
words.sort()
words.sort((a, b) => a.localeCompare(b)) // También se puede order por medio de localCompare
console.log(words); // [ 'Apple', 'Café', 'Car', 'Jungle', 'Premier' ]

const orders = [
    {
        customerName: 'Nicolas',
        total: 600,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 1840,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    }
]
orders.sort((a, b) => b.total - a.total) // Ordena de forma descendente
console.log(orders);
// [
//     { customerName: 'Santiago', total: 1840, delivered: true },
//     { customerName: 'Nicolas', total: 600, delivered: true },
//     { customerName: 'Valentina', total: 240, delivered: true },
//     { customerName: 'Zulema', total: 120, delivered: false }
// ]