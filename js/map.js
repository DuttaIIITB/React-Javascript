const numbers = [1, -1, 2, 3,10,9]

const filtered = numbers.filter((value) => value >= 0)

const mapped = filtered.map((value,number,_array) => {
    return value + number
})

const items = filtered.map(val => {
    
    if(val >= 5)return {value: val}
    return {greater: val}
}    
)
console.log(items)



//const items = filtered.map(num => '<li>' + num + '</li>')
//console.log(filtered)
//console.log(mapped)
//console.log(items)

//console.log('\n')
//const html = '<ul>' + items.join('') + '</ul>'
//console.log(html)