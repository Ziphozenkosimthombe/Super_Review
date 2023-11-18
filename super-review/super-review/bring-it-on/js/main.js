// *Variables*
// Create a variable and console log the value
const varBlu = 'zipho'
console.log(varBlu)

// Create a variable, add 10 to it, and alert the value
let num = 20
num += 10
alert(num)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNum(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
subFourNum(10,2,2,2)

// Create a function that divides one number by another and returns the remainder
function divideOnNumByAnother(n1,n2){
    return n1 % n2
}
console.log(divideOnNumByAnother(10, 4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addsTwoNumber(n1,n2){
    let sum = n1 + n2
    if (sum > 50){
        alert('Jumanji')
    }
}
addsTwoNumber(40,20)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThreeNum(n1,n2,n3){
    let product = n1 * n2 * n3
    if (product % 3 === 0){
        alert('ZEBRA')
    }
}
multThreeNum(3,3,3)
//*Loops*
//Create a function that takes in a word and a number.
//Console log the word x times where x was the number passed in
function takeInWorkAndANum(word, num){
    for (let i = 1; i <= num; i++){
        console.log(word)
    }

}
takeInWorkAndANum('ziphzenkosi', 10)