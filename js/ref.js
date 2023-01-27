const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
]
console.log(courses);
const course = courses.findIndex(function(course){
    return course.name === 'c'
})

console.log(course)

const course2 = courses.find(course =>{
    return course.name === 'a'
})
const course3 = courses.findIndex(course => course.name === 'a')

console.log(course2.id + ' ' + course3)
