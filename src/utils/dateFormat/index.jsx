export const dateFormat = (date) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'Desember'
    ]

    const dateParsed = new Date(date)
    const monthName = months[dateParsed.getMonth()]

    const timeParse = date.split('T')
    const timeParsed = timeParse[0]

    const year = timeParsed.split('-')[0]
    const newDate = timeParsed.split('-')[2]

    return `${newDate} ${monthName} ${year}`
}
