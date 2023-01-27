const numbers = []

let sum = 0

for (let n of numbers){
    sum+=n;
}
console.log(sum)

const sum2 = numbers.reduce((prevvalue,currvalue) => {
    return prevvalue + currvalue
},0)

console.log(numbers)
console.log(sum2) 

