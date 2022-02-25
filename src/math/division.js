function division (n) {

    if (typeof n === 'string') {
        return undefined
    }

    if (n % 3 === 0 && n % 5 === 0){
        return "FizzBuzz"
    }
    else if (n % 3 === 0 ){
        return "Fizz"
    }
    else if ( n % 5 === 0) {
        return "Buzz"
    }

    if (n % 3 !== 0 && n % 5 !== 0) {
        return n
    }

  
}

module.exports = division