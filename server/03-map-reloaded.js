const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true
    }
]

console.log('Original', orders);

// Se transforma orders, de un array de objetos a un array de números, tomando solo el total
const newOrders = orders.map(item => item.total)
console.log('New array with prices', newOrders);

// Se agrega un nuevo atributo como tax a cada uno de los elementos del objeto
// SE DEBE TENER EN CUENTA QUE CON MAP SE HACE UNA REFERENCIA AL VALOR EN MEMORIA, DE MANERA QUE ES MUTABLE EL ELEMENTO
const newOrdersTax = orders.map(item => {
    item.tax = 0.19
    return item
})
console.log('Original', orders);
console.log('New array with taxes', newOrdersTax);

// Para evitar tener UNA REFERENCIA EN MEMORIA DE UN ELEMENTO
const newOrdersTaxes = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    }
})
console.log('New array with taxes', newOrdersTaxes);
console.log('Original', orders);