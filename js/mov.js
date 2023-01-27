const numbers = [1 ,2 ,3 ,4]
const output = move(numbers, 1, -2)
console.log(output)

function move(array, index, offset) {
    const newArray = []
    let n = array.length
    if(index+offset<0 || index+offset>=n){
        console.error ('Invalid Offset')
        return
    }
    
    let p = index + offset
    if(offset>0){
        for(let i=0;i<n;i++){
            if(i<index || i>p)newArray.push(array[i])
            else {
                if(i==p){
                    newArray.push(array[index])
                    continue
                }
                newArray.push(array[i+1])
            }
        }
    }
    else {
        for(let i=0;i<n;i++){
            if(i>index || i<p)newArray.push(array[i])
            else {
                if(i==p)newArray.push(array[index])
                else {
                    newArray.push(array[i-1])
                }
            }
        }
    }
    return newArray
}

//onsole.log(numbers)