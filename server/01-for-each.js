const letters = ['a', 'e', 'i', 'o', 'u']

// Un for normal sería:
for (let i = 0; i < letters.length; i++) {
    console.log('for', letters[i]);
}

// Con un foreach sería:
letters.forEach(element => console.log('foreach', element));

// EJERCICIO
// Crear una lista de tareas, a partir de un array que contenga el título y el estado (completado o no) y muestralos
// en un archivo HTML. Puedes utilizar un input de tipo checkbox para indicar el estado de la tarea

const tasks = [
    { name: 'Create file', status: 'done' },
    { name: 'Create recourses', status: 'unrealized' },
    { name: 'Deployed', status: 'done' }
]

tasks.forEach(({name, status}) => console.log(name, status))