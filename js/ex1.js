const numbers = arrayFromRange(-1,4)

console.log(numbers)

function arrayFromRange(min,max) {
    const output = []
    for (let number = min;number<=max;number++){
        output.push(number)  
    }
    return output
}