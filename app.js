//Closure

function clicked(){
    let counter = 0
    return function(){
        ++counter
        document.getElementById('s').innerHTML = counter
    }
}

const clickButton = clicked()


/////////////
function newAccount(name, initialBalance){
    let balance = initialBalance
    return function(){
        console.log(`Hey ${name}, I've got ${balance}$`)
    }
}

const Jasur = newAccount('Jasur', 17000)
const Toli = newAccount('Toli', 11000)

Jasur()
Toli()