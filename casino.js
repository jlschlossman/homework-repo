const prompt =require('prompt-sync')();

let balance = 10

function coinFlip(flipQ) {
    const flip = Math.random() < 0.5 ? 'H' : 'T';
    console.log(`The house flips ${flip}`);
    return flipQ === flip;
 
}

function addBet(bet) {
    return balance += Number(bet);
}

function subtractBet(bet) {
    return balance -= Number(bet);
}

do {
    let bet = prompt("Hello player! How much would you like to bet? ");

    if (balance < bet) {
        console.log("You don't have enough money! Get outa here!");
        break;
    }

    console.log(`${bet}`);

    let flipQ = prompt("Heads or Tails? (Type 'H' or 'T') ");

    console.log(`You chose ${flipQ}`);
   

    if (coinFlip(flipQ)) {
        addBet(bet);
        console.log(`Congratulations! You won the bet and ${bet} dollars has been added to your balance.`)
    } else {
        subtractBet(bet);
        console.log(`So sorry! You lost the bet and ${bet} dollars has been subtracted from your balance.`)
    }

    console.log(`Your balance is ${balance}`);
    

} while (balance > 0);

if (balance <= 0) {
console.log("You are out of money. The house always wins!");
} 