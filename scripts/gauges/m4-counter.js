const moneyCounter = document.getElementById('money-counter');
const startingAmmount = 10000000000;
const startingTime = new Date(2021, 01, 01);
const yearlyGrowth = 1.2;
const incrementSecond = yearlyGrowth / (360*24*60*60);




const updateCounter = () => {
    const now = new Date();
    const timeDiffRaw = now - startingTime;
    const timeDiffSeconds = (timeDiffRaw / 1000).toFixed(0);
    const currentAmount = startingAmmount + (timeDiffSeconds * incrementSecond);


    moneyCounter.innerHTML = currentAmount;

}

setInterval(updateCounter, 1000);




