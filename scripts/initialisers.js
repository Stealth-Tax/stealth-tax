//Crypto Addresses:
const xmrAddress = '4ARzc1qxPCd3nhuaCYc4d4HQd7VL6rvQGSaqiHiiCc9XPEHWNgyuNrGaHqbtsVxHQdbiXzzSo2j68ia27vQgjdnT1QCptH7';
const btcAddress = '1KL7B1x9FRALcoTckPpf4rDzEP1Gh7VCBU';

//Enabling popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})



//Enabling tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


//Catching crypto tooltips
const xmrTriggerEl = document.getElementById('xmr-tooltip');
const xmrTooltip = bootstrap.Tooltip.getInstance(xmrTriggerEl);
const btcTriggerEl = document.getElementById('btc-tooltip');
const btcTooltip = bootstrap.Tooltip.getInstance(btcTriggerEl);
xmrTooltip.disable();
btcTooltip.disable();

//Carousel Indicators
let myCarousel = document.querySelector('#chartCarousel');
  myCarousel.addEventListener('slide.bs.carousel', (event) => {
    let elementChildrens = document.querySelector("#chartCarousel-indicators").children;
    elementChildrens.item(event.from).classList.remove("active");
    elementChildrens.item(event.to).classList.add("active");
});

  let myRentCarousel = document.querySelector('#rent-seeking-carousel');
  myRentCarousel.addEventListener('slide.bs.carousel', (event) => {
    let elementChildrens = document.querySelector("#rent-seeking-carousel-indicators").children;
    elementChildrens.item(event.from).classList.remove("active");
    elementChildrens.item(event.to).classList.add("active");
});

//Copy to clip

const copyXmrToClipboard = () => {
  try {
    let success = navigator.clipboard.writeText(xmrAddress);
    if(success){
      xmrTooltip.enable();
      xmrTooltip.show();

      setTimeout(function() {
        xmrTooltip.hide();
        xmrTooltip.disable();
      }, 2000);
    } else {
      console.log("Not copied...")
    }
  } catch (err) {
    console.log(err);
  }
}

const copyBtcToClipboard = () => {
  try {
    let success = navigator.clipboard.writeText(btcAddress);
    if(success){
      btcTooltip.enable();
      btcTooltip.show();

      setTimeout(function() {
        btcTooltip.hide();
        btcTooltip.disable();
      }, 2000);
    } else {
      console.log("Not copied...")
    }
  } catch (err) {
    console.log(err);
  }
}

