
const numbers = [3,4]


// Add the number to the end
numbers.push(5,6)
console.log(numbers)

// Add the number to the beginning
numbers.unshift(1,2)
console.log(numbers)

//Add and optionally delete a seq of number  to the middle
numbers.splice(1,0,'a','b',1)
console.log(numbers) 

//index of some elements
console.log(numbers.indexOf(1))