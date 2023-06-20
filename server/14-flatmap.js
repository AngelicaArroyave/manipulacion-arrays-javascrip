const users = [
    { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
    { userId: 2, username: 'Mike', attributes: ['Lovely'] },
    { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] }
]

const attributes = users.map(user => user.attributes)
console.log(attributes); // [ [ 'Nice', 'Cute' ], [ 'Lovely' ], [ 'Nice', 'Cool' ] ]

const newAttributes = attributes.flat()
console.log(newAttributes); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

// Con flatmap
const newAttributesWithFlatMap = users.flatMap(user => user.attributes)
console.log(newAttributesWithFlatMap); // [ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: 'Cita 1'
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: 'Cita 2'
        }
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: 'Cita 3'
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: 'Cita 4'
        }
    ]
}

// Mi solución
const newCalendarPrimary = calendars.primaryCalendar.flatMap(calendar => calendar.startDate)
const newCalendarSecondary = calendars.secondaryCalendar.flatMap(calendar => calendar.startDate)
const newCalendarWithFlatMap = [...newCalendarPrimary, ...newCalendarSecondary]
console.log(newCalendarWithFlatMap);

// Solución del vídeo
const responseKeys = Object.keys(calendars)
console.log(responseKeys); // [ 'primaryCalendar', 'secondaryCalendar' ]

const responseValues = Object.values(calendars).flatMap(item => item.map(element => element.startDate))
console.log(responseValues);