const cashSlider = document.getElementById('cash-slider');
const houseSlider = document.getElementById('house-slider');
const bitcoinSlider = document.getElementById('bitcoin-slider');
const goldSlider = document.getElementById('gold-slider');
const stockSlider = document.getElementById('stock-slider');
const inflationVector = document.getElementById('inflation-vector-calculated');


const totalWealth = Number(cashSlider.max);


console.log(totalWealth);


houseSlider.oninput = function() {

    let newTotalValue = Number(houseSlider.value) + Number(bitcoinSlider.value) + Number(goldSlider.value) + Number(stockSlider.value);
    cashSlider.value = totalWealth - newTotalValue;
    if(newTotalValue > totalWealth) {
        houseSlider.value -= newTotalValue - totalWealth;
    }
    updateInflation();
    
}

bitcoinSlider.oninput = function() {
    let newTotalValue = Number(houseSlider.value) + Number(bitcoinSlider.value) + Number(goldSlider.value) + Number(stockSlider.value);
    cashSlider.value = totalWealth - newTotalValue;
    if(newTotalValue > totalWealth) {
        bitcoinSlider.value -= newTotalValue - totalWealth;
    }
    updateInflation();
}

goldSlider.oninput = function() {
    let newTotalValue = Number(houseSlider.value) + Number(bitcoinSlider.value) + Number(goldSlider.value) + Number(stockSlider.value);
    cashSlider.value = totalWealth - newTotalValue;
    if(newTotalValue > totalWealth) {
        goldSlider.value -= newTotalValue - totalWealth;
    }
    updateInflation();
}

stockSlider.oninput = function() {
    let newTotalValue = Number(houseSlider.value) + Number(bitcoinSlider.value) + Number(goldSlider.value) + Number(stockSlider.value);
    cashSlider.value = totalWealth - newTotalValue; 
    if(newTotalValue > totalWealth) {
        stockSlider.value -= newTotalValue - totalWealth;
    }
    updateInflation();
}



//To update the index
const realInflatioIndex = 19.0;
const houseMaxAdj = 10.0;
const bitcoinMaxAdj = realInflatioIndex;
const goldMaxAdj = 5.9;
const stockMaxAdj = 14.6;

const updateInflation = () => {

    let houseAdj = houseSlider.value / 10 * houseMaxAdj;
    let bitcoinAdj = bitcoinSlider.value / 10 * bitcoinMaxAdj;
    let goldAdj = goldSlider.value / 10 * goldMaxAdj;
    let stockAdj = stockSlider.value / 10 * stockMaxAdj;

    let inflationAdjFigure = realInflatioIndex - houseAdj - bitcoinAdj - goldAdj - stockAdj;
    inflationVector.innerHTML = parseFloat(inflationAdjFigure).toFixed(1) + '<span>%</span>';
}
