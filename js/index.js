let arr = [12,23,34,45,56,67]
let a = arr.map((value)=>value+1)

let b = arr.map((value,index,array) => {
    return index + 1
})

let c = arr.reduce((h1,h2)=>h1+h2)
let d = arr.reduce((h1,h2)=>h1 + h2)
console.log(a)
console.log(b)
console.log(c)
console.log(d)