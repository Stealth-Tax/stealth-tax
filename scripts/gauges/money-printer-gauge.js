const gauge = new RadialGauge({
    renderTo: "money-gauge",
    // title: "MONEY PRINTER",
    
    width: 300,
    height: 300,
    minValue: 0,
    startAngle: 90,
    ticksAngle: 180,
    valueBox: false,
    maxValue: 100,
    majorTicks: [
        "ZERO",
        "BRRR"
    ],
    colorMajorTicks: "#f5f5f5",
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 75,
            "to": 100,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#101426",
    colorNumbers: "#101426",
    fontNumbers:"hero-new,sans-serif",
    fontNumbersWeight: "lighter",
    borderShadowWidth: 0,
    borders: false,
    needleType: "arrow",
    colorNeedle: "#5075AB",
    colorNeedleEnd: "#5075AB",
    needleWidth: 2,
    needleCircleSize: 5,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear",
    // colorTitle: "fff",
    // fontTitle: "hero-new,sans-serif",
    // fontTitleWeight: '100'
});

gauge.draw();

setInterval(function() {
  
    // update the above chart...
    var value = randomIntFromInterval(75,85);
    gauge.value = value;
    
    // Update the declarative chart...
  }, 1800);

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
