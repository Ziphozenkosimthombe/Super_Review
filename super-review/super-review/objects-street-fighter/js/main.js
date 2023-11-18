//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFight(name,health,speed,specialMove){
    // properties
    this.name = name
    this.health = health
    this.speed = speed
    this.specialMove = specialMove
    //methods
    this.throw = function (){
        console.log('yeeeee!!')
    }
    this.taunt = function (){
        console.log(`you cna't handle my ${this.specialMove}`)
    }
    this.fatality = function (){
        console.log('Get Over Heeeeeeeeeereeee')
    }
}
let charLi = new StreetFight('char Li', 20, 100, 'spinning Bird Kick')