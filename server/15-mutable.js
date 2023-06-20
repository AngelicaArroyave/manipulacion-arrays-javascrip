const products = [
    { title: 'Pizza', price: 121, id: 1 },
    { title: 'Burger', price: 121, id: 2 },
    { title: 'Hot cakes', price: 121, id: 3 }
]

const shoppingCart = []
console.log('Products ', products);
console.log('My products ', shoppingCart);
console.log('-'.repeat(10));

const product = products.find(product => product.id === 2)
if(product) shoppingCart.push(product)
console.log('Products ', products);
console.log('My products ', shoppingCart);
console.log('-'.repeat(10));

const deleteProduct = products.splice(2, 1)
console.log('Products ', products);
console.log('My products ', shoppingCart);
console.log('-'.repeat(10));

const newProducts = [
    { title: 'Pizza', price: 121, id: 1 },
    { title: 'Burger', price: 121, id: 2 },
    { title: 'Hot cakes', price: 121, id: 3 }
]

const update = {
    id: 3,
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const findProduct = newProducts.findIndex(product => product.id === update.id)
newProducts[findProduct] = {
    ...newProducts[findProduct],
    ...update.changes
}
console.log(newProducts);