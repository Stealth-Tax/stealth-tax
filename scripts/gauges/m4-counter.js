const moneyCounter = document.getElementById('money-counter');
const startingAmmount = 2620290000000;
const initTime = new Date(2021, 01, 01);
const yearlyGrowth = 0.072;
const secondsInYear = (360*24*60*60);
const incrementSecond = yearlyGrowth / secondsInYear;
const finalPriceFormat = Intl.NumberFormat('en-GB', 
{style: 'currency', currency: 'GBP', maximumFractionDigits: 0},
);

let ammount = startingAmmount;


const determineStartingNumber = () => {
    const timeDiffSeconds = getTimeDiff();
    ammount = startingAmmount + (timeDiffSeconds / secondsInYear * yearlyGrowth * startingAmmount);
    
}


const updateCounter = () => {
 
    ammount += incrementSecond * ammount;

    moneyCounter.innerHTML = finalPriceFormat.format(ammount);

}






function getTimeDiff() {
    const timeElapsed = Date.now();
    const now = new Date(timeElapsed);
    const timeDiff = Math.abs(now - initTime);
    const timeDiffSeconds = (timeDiff / 1000).toFixed(0);
    return timeDiffSeconds;
}

determineStartingNumber();
setInterval(updateCounter, 1000);