//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNum(n1,n2){
    alert(n1 - n2)
}
subTwoNum(10, 5)

//create a function that divides three numbers and console logs the quotient
function dividesThreeNum(n1,n2,n3){
    let quotient = n1/n2/n3
    console.log(quotient)
}
dividesThreeNum(10,2,2)

//create a function that multiplys three numbers and returns the product
function multThreeNumAndReturn(n1,n2,n3){
    let product = n1*n2*n3
    return product
}
console.log(multThreeNumAndReturn(2,2,2))

//---Medium
//create a function that takes in three numbers.
//Add the first two numbers and return the remainder of dividing the sum of
//the first two numbers by the third number
function takeThreeNum(n1,n2,n3){
    let firstTwo = n1+n2
    let sum = firstTwo % n3
    return sum
}
console.log(takeThreeNum(2,2,2))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers.
//If the product is greater than 100 add the sum of the last two numbers and
//console log the value. If the product is less that 100, subtract the difference
//of the last two numbers and console log the value. If the product is 100,
//multiply the first three numbers together and alert the remainder of dividing
//the fourth number
