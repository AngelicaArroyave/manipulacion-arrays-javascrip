const words = ['spray', 'limit', 'elite', 'exuberant']
const newWordsWithFor = []

// Con un for
for (let i = 0; i < words.length; i++) {
    if(words[i].length >= 6) newWordsWithFor.push(words[i])
}

console.log(newWordsWithFor); // [ 'exuberant' ]

// Con filter
const newWordsWithFilter = words.filter(word => word.length >= 6)
console.log(newWordsWithFilter); // [ 'exuberant' ]

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

const productsDelivered = orders.filter(order => order.delivered)
console.log(productsDelivered);
const productsDeliveredAndTotal = orders.filter(order => order.delivered && order.total > 100)
console.log(productsDeliveredAndTotal);

const searchName = (query) => {
    return orders.filter(order => {
        return order.customerName.includes(query)
    })
}

console.log(searchName('ti'));