//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function print21Sv(num){
    for (let i = 1; i <= num; i++){
        console.log('21')
    }
}
print21Sv(21)
//Bonus can you make it print '21' 21 times to the dom?

function print21Sv(num){
    for (let i = 1; i <= num; i++){
        document.querySelector('h2').innerText += ' 21'
    }
}
print21Sv(21)
