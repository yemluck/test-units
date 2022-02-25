function average(numbers) {
//     if (numbers.length === 0){
//         return undefined;
//     }
//     // TODO
//     sum = 0
//     for (let n of numbers){
//         if (typeof n === 'string'){
//             return undefined;
//         }
//      sum += n
//     }

//    return sum/numbers.length

// Handle empty arrays
if (numbers.length === 0) {
    return undefined;
}

// Validate, must be strings
const isInvalid = numbers.some(n => typeof n === 'string');
if (isInvalid) {
    return undefined;
}

// Reduce FTW!
return numbers
    .reduce((sum, n) => sum + n, 0)
    / numbers.length
}

module.exports = average;