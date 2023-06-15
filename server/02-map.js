const colors = ['blue', 'red', 'yellow', 'brown', 'black', 'gray']
const newColors = []

// Con un for sería:
for (let i = 0; i < colors.length; i++) {
    newColors.push(colors[i] + '++')
}

console.log('Original', colors);
console.log('New', newColors);

// Con un map sería:
const newArrayColors = colors.map(item => item + '++')

console.log('Original', colors);
console.log('New array with map function', newArrayColors);