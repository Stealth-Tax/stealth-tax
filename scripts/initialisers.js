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
const copyToClipboard = (data) => {
  navigator.clipboard.writeText(data);
}
