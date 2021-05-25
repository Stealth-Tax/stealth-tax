//mediaquery sizes
const mediaQueryList = [
    window.matchMedia("only screen and (min-width: 576px"),
    window.matchMedia("only screen and (min-width: 768px"),
    window.matchMedia("only screen and (min-width: 992px"),
    window.matchMedia("only screen and (min-width: 1200px"),
    window.matchMedia("only screen and (min-width: 1400px")
]

const canvasSizes = [100, 200, 300, 400, 450];






//Canvas elements
let m4x12MonthCanvas = document.getElementById("m4xChart12Month");
let m4x3MonthCanvas = document.getElementById("m4xChart3Month");
let pieCanvas = document.getElementById("pieChart");
    pieCanvas.setAttribute("height", 450);
let rentSeekTime = document.getElementById("rent-seek-time");
let rentSeekBubble = document.getElementById("rent-seek-bubble");
    rentSeekBubble.setAttribute("height", 450);

//MediaQuery Listeners and Resizers
//const mediaQueryList = window.matchMedia("only screen and (max-width: 1400px");
// const listener = event => {
//     if(mediaQueryList[0].matches) {
//         pieCanvas.setAttribute("height", canvasSizes[0]);
//         console.log("YES");
//         console.log(pieCanvas.getAttribute("height"));
//     };
//     if(mediaQueryList[1].matches) pieCanvas.setAttribute("height", canvasSizes[1]);
//     if(mediaQueryList[2].matches) pieCanvas.setAttribute("height", canvasSizes[2]);
// }
// //mediaQueryList[0].addEventListener("change", listener);
// for(let i=0; i<mediaQueryList.length; i++) {
//    mediaQueryList[i].addEventListener("change", listener);
// //    if(mediaQueryList[i].matches) {
// //        pieCanvas.setAttribute("height", canvasSizes[i]);
// //        console.log(canvasSizes[i]);
// //    }
// }


//m4x Data
const m4Data12Month = [0.9,1.1,1.9,1.7,1.5,2.7,1.8,1.9,1.6,1.6,1.6,1.6,2.3,2.6,2.7,2.6,2.5,1.5,2.6,2.6,3.2,3.3,3,3.6,3.6,4.3,4.2,4.1,4.7,5,5,5,4.5,4.8,5.3,5,4.6,4.4,4.2,4.3,4.7,3.8,3.6,4.3,3.8,3.9,3.8,3.9,3.8,3.6,3.8,3.5,3,4.5,4.5,3.8,4,4.2,4.2,3.7,4.3,3.7,3.9,4.5,4.4,3.9,4.1,4.4,4.8,4.2,4.7,6.1,7,7.2,7.8,7.4,6.8,7.3,6.5,6.6,6.8,7.4,6.8,6.2,4.3,5.3,4.6,4.3,5,4.8,5.2,4.6,3.9,3.1,4.2,3.4,3.4,2.8,2.5,2.6,2.4,2.4,1.9,2.1,2.2,2.8,1.9,2.1,3.1,3.4,3.7,3.5,4.1,3.8,4.5,4.6,7.4,9.2,11.4,11.8,12.6,11.7,11.7,13.2,13.8,14.3,15,15.2];
const m4Labels = ["07/10","08/10","09/10","10/10","11/10","12/10","01/11","02/11","03/11","04/11","05/11","06/11","07/11","08/11","09/11","10/11","11/11","12/11","01/12","02/12","03/12","04/12","05/12","06/12","07/12","08/12","09/12","10/12","11/12","12/12","01/13","02/13","03/13","04/13","05/13","06/13","07/13","08/13","09/13","10/13","11/13","12/13","01/14","02/14","03/14","04/14","05/14","06/14","07/14","08/14","09/14","10/14","11/14","12/14","01/15","02/15","03/15","04/15","05/15","06/15","07/15","08/15","09/15","10/15","11/15","12/15","01/16","02/16","03/16","04/16","05/16","06/16","07/16","08/16","09/16","10/16","11/16","12/16","01/17","02/17","03/17","04/17","05/17","06/17","07/17","08/17","09/17","10/17","11/17","12/17","01/18","02/18","03/18","04/18","05/18","06/18","07/18","08/18","09/18","10/18","11/18","12/18","01/19","02/19","03/19","04/19","05/19","06/19","07/19","08/19","09/19","10/19","11/19","12/19","01/","02/","03/","04/","05/","06/","07/","08/","09/","10/","11/","12/","01/21","02/21"];
const m4Data3Month = [-0.7,-1.9,-1.2,2.5,3.9,5.9,-0.5,-0.5,1,5.3,4.8,0.9,1.8,2.3,3,4,3.4,1.1,-0.7,0,7.9,8.3,6.5,2.6,3.1,7.2,5.3,5.9,5.4,4.3,2.7,1.1,5.9,7.4,7.8,4.3,2.3,3.3,2.2,5,6.6,2.8,0,-0.2,6,8.4,5.6,4.7,2.2,2.4,1.9,3.7,4.3,5.3,3.8,2.7,4.1,7.3,7.3,3.6,2.6,0.5,2.7,4.4,7.4,5.4,2.2,2.6,7.5,7.5,8.3,8.9,14.3,10.6,9.5,6.1,5.9,3.4,-1.2,1.7,5.6,10.9,9.3,6.3,1.9,4.5,3.2,6.1,4.7,4.2,2.3,0.2,1.9,2.3,7.5,4.5,2.8,-0.8,-0.7,3.1,2.8,4.1,-0.6,-0.8,0.9,5.8,6.5,4,4.1,5.3,5.9,4.9,5.6,4.6,3.2,1.2,15.3,26.1,36.7,22.3,17.8,6.5,5.4,7.2,13.9,15,9.8,6.1];

//RentSeeking Data
const rentseekYear = ["1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]
const rentseekY = [37.4,35.6,35.7,35.1,34.9,35.3,36.4,37.4,38.8,40,39.9,39.8,40.1,43.6,46.3,45.8,44.7,44.2,42.5,42,41,40.4,40.2,39.5,39.8,54.4]

//Bubble Data
const bubbleData = {
    datasets: [{
      label: 'Global GDP',
      data: [{
        x: 45,
        y: 45,
        r: 45
      }],
      backgroundColor: '#092632',
      
    },
    {
        label: 'Global Debt',
        data: [{
            x: 50,
            y: 50,
            r: 100
        }],
        backgroundColor: 'rgb(80, 117, 171)'
    }],
  };

//Global defaults
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.defaultFontFamily = "'hero-new', 'Helvetica', sans-serif";


//Charts
let m4xChart12Month = new Chart(m4x12MonthCanvas, {
  type: 'line',
  data: {
    labels: m4Labels,
    datasets: [{
      label: 'M4 Growth',
      data: m4Data12Month,
      backgroundColor: 'rgba(80, 117, 171, 1)',
      pointRadius: '1'
    }],
  },
  options: {
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            ticks: {
                autoSkip: true,
                maxTicksLimit: 5
            },
            gridLines: {
                display: false,
            },
            scaleLabel: {
                display: true
            }
          
        }],
        yAxes: [{
            ticks: {
                callback: function(value, index, values) {
                    return value + '%';
                },
                autoSkip: true,
                maxTicksLimit: 3
            },
            gridLines: {
                display: false
            },

            // scaleLabel: {
            //     display: true,
            //     labelString: 'Growth'
            // }
        }],
      }
      
}
});


let m4xChart3Month = new Chart(m4x3MonthCanvas, {
    type: 'line',
    data: {
      labels: m4Labels,
      datasets: [{
        label: 'M4 Growth',
        data: m4Data3Month,
        backgroundColor: 'rgba(80, 117, 171, 1)',
        pointRadius: '1'
      }],
    },
    options: {
      legend: {
          display: false
      },
      scales: {
          xAxes: [{
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5
              },
              gridLines: {
                  display: false,
              },
              scaleLabel: {
                  display: true
              }
            
          }],
          yAxes: [{
              ticks: {
                  callback: function(value, index, values) {
                      return value + '%';
                  },
                  autoSkip: true,
                  maxTicksLimit: 3,
                  min: -3,
                  max: 40
              }
              ,
              gridLines: {
                  display: false
              },
              
              
              // scaleLabel: {
              //     display: true,
              //     labelString: 'Growth'
              // }
          }]
        }
        
  }
  });

  let pieChart = new Chart(pieCanvas, {
      type: 'pie',
      data: {
          labels: [
              'Public Spending',
              'Private Spending'
          ],
          datasets: [{
            label: 'Public Spending as Percentage of GDP',
            data: [54, 46],
            backgroundColor: [
              '#5075AB',
              '#101426'
            ],
            hoverOffset: 4
          }],
      },
      options: {
        legend: {
            display: false
        },
        //responsive: false
        //maintainAspectRatio: false
       
        // title: {
        //     display: true,
        //     text: 'Public Spending as %GDP'
        // },
 
    }
  });

  let rentseek = new Chart(rentSeekTime, {
    type: 'line',
    data: {
      labels: rentseekYear,
      datasets: [{
        label: 'State Rent Seeking %',
        data: rentseekY,
        backgroundColor: 'rgba(80, 117, 171, 1)',
        pointRadius: '1'
      }]
    },
    options: {
      legend: {
          display: false
      },
      scales: {
          xAxes: [{
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 5
              },
              gridLines: {
                  display: false,
              },
              scaleLabel: {
                  display: true
              }
            
          }],
          yAxes: [{
              ticks: {
                  callback: function(value, index, values) {
                      return value + '%';
                  },
                  autoSkip: true,
                  maxTicksLimit: 3,
                  min: 30,
                  max: 55
                },
        
              gridLines: {
                  display: false
              },
  
              
          }],
        }
        
  }
  });

  let bubbleChart = new Chart(rentSeekBubble, {
    type: 'bubble',
    data: bubbleData,
    options: {
        //aspectRatio: 1,
        plugins: {
          legend: false,
          tooltip: {
            callbacks: {
                labelColor: function(context) {
                    return {
                        borderColor: 'rgb(0, 0, 255)',
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderRadius: 2,
                    };
                },
                labelTextColor: function(context) {
                    return '#543453';
                }
            }
          },
        },
        scales:
        {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0
                }              
            }],

            xAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0
                } 
            }]
        }
    }
});