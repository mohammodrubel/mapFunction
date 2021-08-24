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