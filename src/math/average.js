function average(numbers) {
    if (numbers.length === 0){
        return undefined;
    }
    // TODO
    sum = 0
    for (let n of numbers){
        if (typeof n === 'string'){
            return undefined;
        }
     sum += n
    }

   return sum/numbers.length
}

module.exports = average;