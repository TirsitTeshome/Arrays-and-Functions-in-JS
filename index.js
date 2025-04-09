//1
function strLength(names){
    return names.map(str=>str.length)
}

const names=["Tirsit", "kotlin", "Javascript"]
const len= strLength(names)
console.log(len)
 
//2
function even(nums){
    return nums.filter(num=>num%2==0);
}
const nums=[23,44,50,13,28];
const evenNums= even(nums)
console.log(evenNums)

//3
function smartStudents(students){
    return students.filter(student=> student.score>75)
    .map(student=> student.name)
}

const students=[
    {name:"Tirsit", score:90},
    {name:"Beth", score:80},
    {name:"danny", score:60}
];

const smarties=smartStudents(students)
console.log(smarties)

//4
function square(numbers){
    return numbers.map(x=> x*x)
}

const numbers=[3,8,5,9]
const squared=  square(numbers)
console.log(squared)

//5
function capital(mixedArray){
    return mixedArray.filter( str=> typeof str=== 'string').map(strings=>strings.toUpperCase())
}

const mixedArray=["life",100, "universe", false, null]
const capitalStr= capital(mixedArray)
console.log(capitalStr)