const numbers = [1,2,3,4]

// numbers.push(12) 
//for pushing at the end

//numbers.unshift(12)
//for pushing in the front


//poping last number
const last = numbers.pop()


console.log(last)
console.log(numbers)


//poping first
const first = numbers.shift()
console.log(first)
console.log(numbers)

//foreach array function
numbers.forEach((number , index) => console.log(number + " " + index))