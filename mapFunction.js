const dobbleIt = number => number * 5
const numbers = [1,2,3,4,5]
const output = []
    for (const number of numbers){
        const result = dobbleIt(number)
        output.push(result)
    }
console.log(output)

const dobbleIt = number => number* 3
const myArrays = [1,2,3,4,5,6,7]
const outPut = []
    for (const myArray of myArrays){
        const result =dobbleIt(myArray)
        outPut.push(result)
    }
console.log(outPut)

const maltiple = myArray => myArray * 7
const numbers = [1,2,3,4,5,6]
const output = []
    for (const number of numbers){
        const result = maltiple(number)
        output.push(result)
    }
console.log(output)

// map function implement 
// loop throw this element 
// foreach element call the provide function 
// result for ich element will be stored in the array 
// system one  
const x = numbers.map(maltiple)

// system two  
const mainResult = numbers.map(myArray=> myArray * 7)
console.log(x)
console.log(mainResult)
const friends = ['ashik','nozrul','kashem','hashem','toufiq','rubel','fardin Tazbeed','mohammod rubel']

const friendsLength = friends.map(friend => friend.length)
console.log(friendsLength)
const products = [
    {name:'Tshart',color:'red',amount:4000,mobile:'1234567890'},
    {name:'fullShirt',color:'sky',amount:5000,mobile:'098765'},
    {name :'belt',color:'black',amount:2000,mobile:'09876123'},
    {name :'shoes',color:'blue',amount:3000,mobile:'12345678'}

]
const productName = products.map(product =>product.name)
console.log(productName)
const colorName = products.map(color =>color.color)
console.log(colorName)
const amountValue = products.map(product => product.amount)
console.log(amountValue)
const shoesAmount = products.map(product => product.mobile)
console.log(shoesAmount)
products.map(product => console.log(product))



const friends =['rubel','ashik','robin','shihab','nahid','sayem','mohammod Rubel','fardin Tazbeed']
const numbers = [1,2,3,4,5,6,7,8,90,12,34,56,78,88,888,890,987,654,321]
const langthOfFriends = friends.map(friend => friend.length)
// console.log(langthOfFriends)

const numberofMyFriends = numbers.map(number => number *5)
// console.log(numberofMyFriends)

const studentInfo =  [
    {name:'fardin',class:'LLB',rollNumber:'8765',mobileNumber:'01907626345',yearOfStudent:'2020',amount:'201357'},
    {name:'rubel',class:'BSC',rollNumber:'4857',mobileNumber:'01907626232',yearOfStudent:'2021',amount:'202468'},
    {name:'nahid',class:'MSC',rollNumber:'8476',mobileNumber:'01907626222',yearOfStudent:'2022',amount:'201234'},
    {name:'shihab',class:'MBA',rollNumber:'8988',mobileNumber:'01907626345',yearOfStudent:'2021',amount:'209876'},
    {name:'ershad',class:'BBA',rollNumber:'4759',mobileNumber:'01907626234',yearOfStudent:'2020',amount:'207890'},
]
const information = studentInfo.map(student => student.mobileNumber)
const information2 = studentInfo.map(student => student.rollNumber)
const information3 = studentInfo.map(student => student.class)
const information4 = studentInfo.map(student => student.amount)
const information5 = studentInfo.map(student => student.name)
const infornation6 = studentInfo.map(student => student.yearOfStudent)
const informationx = studentInfo.forEach(student =>student.class)

console.log(information,information2,information3,information4,information5,infornation6)
