// Tienes un array de objetos que representan datos de productos con los siguientes atributos: name, price, stock.
// Tu reto es agregar y calcular una nueva propiedad llamada 'taxes', los impuestos deben ser del 19% con base al
// precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.
// Por ejemplo, si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los 'taxes'
// será $190, o para un producto con precio de $656 el resultado de los 'taxes' será de $124.
// Para solucionalo vas a encontrar una función llamada 'addNewAtr' que recibe un parámetro de entrada:
// array: Un array de objetos
// Input
// [
//     {
//         name: 'Product 1',
//         price: 1000,
//         stock: 10
//     },
//     {
//         name: 'Product 2',
//         price: 2000,
//         stock: 20
//     }
// ]
// Output
// [
//     {
//         name: 'Product 1',
//         price: 1000,
//         stock: 10,
//         taxes: 190
//     },
//     {
//         name: 'Product 2',
//         price: 2000,
//         stock: 20,
//         taxes: 380
//     }
// ]

const products = [
    {
        name: 'Product 1',
        price: 1000,
        stock: 10
    },
    {
        name: 'Product 2',
        price: 2000,
        stock: 20
    }
]

const newProducts = products.map(product => {
    return {
        ...product,
        taxes: Math.trunc(product.price * 0.19)
    }
})

console.log('Original', products);
console.log('New array with taxes in products', newProducts);