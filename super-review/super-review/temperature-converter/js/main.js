//Write your pseduo code first!
//need the value in celcius
//convert celcius to far
//show the value
document.querySelector('button').addEventListener('click', runTemp)
function runTemp(){
    let temp = Number(document.querySelector('input').value)
    let convertor = (temp - 32) * 5/9
    let p = document.querySelector('p')
    p.innerText = `${convertor.toFixed(0)}`
}

