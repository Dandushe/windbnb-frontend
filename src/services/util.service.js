export const utilService = {
    formatDate,
    getRandDateRange,
    financial
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getRandDateRange() {
    const now = new Date();

    const thisMonth = now.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const nextMonth = months[thisMonth + 1]

    const startDate = getRandomIntInclusive(1, 27)

    let maxEndDate = startDate + 7
    if (maxEndDate > 28) maxEndDate = 28
    const endDate = getRandomIntInclusive(startDate + 1, maxEndDate)

    const dateStr = `${nextMonth} ${startDate} - ${endDate}`
    return dateStr
}

function financial(x) {
    return Number.parseFloat(x).toFixed(1);
}

export function formatNumber(num) {
    return num.toLocaleString('en-US')
}