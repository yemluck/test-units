function leapYear (year) {
    if (year === 0) {
        return false
    }
    if ((0 === year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
} else {
    return false
    }
}


module.exports = leapYear