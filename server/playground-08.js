// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde
// normalmente se transforma todo en minúscula y se camban los espacios por un guión (-)
// Para solucionarlo vas a encontrar una función llamada 'parseToURL' que recibe un parámetro de entrada:
// title: Un string con el título
// Input: 'La forma de correr Python'
// Output: 'La-forma-de-correr-Python'
// Input: 'La API para nunca parar de aprender'
// Output: 'La-API-para-nunca-parar-de-aprender'
// Input: 'Curso de arrays'
// Output: 'Curso-de-arrays'

const title = 'La API para nunca parar de aprender'
const separator = '-'

const titleToURL = title.split(' ').join(separator)
console.log(titleToURL);