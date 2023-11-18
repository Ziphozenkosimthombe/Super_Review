//--- Easy
//create a variable and assign it a number
let num = 20

//minus 10 from that number
num -=10

//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
let holdInput = Number(document.querySelector('input').value)
//add 25 to that number
holdInput += 25
//alert that number
alert(holdInput)

//--- Hard
//create a variable that holds the h1
let holdH1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two 
//previous variables
holdH1.addEventListener('click', run)
function run(){
    let holdInput = Number(document.querySelector('input').value)
    console.log(num + holdInput)
}