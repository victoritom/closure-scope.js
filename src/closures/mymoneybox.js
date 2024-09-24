// function moneybox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`)
// }

// moneybox(20);
// moneybox(20);

function moneybox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}

const myMoneyBox = moneybox();
myMoneyBox(20);
myMoneyBox(20);
myMoneyBox(30);