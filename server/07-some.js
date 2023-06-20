const numbers = [1, 2, 3, 4, 5, 6]

// Con for
let flag = false
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) flag = true
}

console.log(flag); // true

const response = numbers.some(number => number % 2 === 0)

console.log(response); // true

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

const responseDelivered = orders.some(order => order.delivered)

console.log(responseDelivered); // true

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: 'Cita de trabajo'
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 15, 30),
        title: 'Cita con el jefe'
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 1, 21),
        title: 'Cena familiar'
    }
]

const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 20, 30)
}

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverLap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },
            { start: newDate.startDate, end: newDate.endDate }
        )
    })
}

console.log('Dates ', isOverLap(newAppointment));