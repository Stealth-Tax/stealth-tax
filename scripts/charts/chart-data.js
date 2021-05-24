
let slideOneCanvas = document.getElementById("m4xChart12Month");
let slideTwoCanvas = document.getElementById("m4xChart3Month");


let pieCanvas = document.getElementById("pieChart");
let rentSeekTime = document.getElementById("rent-seek-time");
let rentSeekBubble = document.getElementById("rent-seek-bubble");

const m4Data12Month = [0.9,1.1,1.9,1.7,1.5,2.7,1.8,1.9,1.6,1.6,1.6,1.6,2.3,2.6,2.7,2.6,2.5,1.5,2.6,2.6,3.2,3.3,3,3.6,3.6,4.3,4.2,4.1,4.7,5,5,5,4.5,4.8,5.3,5,4.6,4.4,4.2,4.3,4.7,3.8,3.6,4.3,3.8,3.9,3.8,3.9,3.8,3.6,3.8,3.5,3,4.5,4.5,3.8,4,4.2,4.2,3.7,4.3,3.7,3.9,4.5,4.4,3.9,4.1,4.4,4.8,4.2,4.7,6.1,7,7.2,7.8,7.4,6.8,7.3,6.5,6.6,6.8,7.4,6.8,6.2,4.3,5.3,4.6,4.3,5,4.8,5.2,4.6,3.9,3.1,4.2,3.4,3.4,2.8,2.5,2.6,2.4,2.4,1.9,2.1,2.2,2.8,1.9,2.1,3.1,3.4,3.7,3.5,4.1,3.8,4.5,4.6,7.4,9.2,11.4,11.8,12.6,11.7,11.7,13.2,13.8,14.3,15,15.2];
const m4Labels = ["07/2010","08/2010","09/2010","10/2010","11/2010","12/2010","01/2011","02/2011","03/2011","04/2011","05/2011","06/2011","07/2011","08/2011","09/2011","10/2011","11/2011","12/2011","01/2012","02/2012","03/2012","04/2012","05/2012","06/2012","07/2012","08/2012","09/2012","10/2012","11/2012","12/2012","01/2013","02/2013","03/2013","04/2013","05/2013","06/2013","07/2013","08/2013","09/2013","10/2013","11/2013","12/2013","01/2014","02/2014","03/2014","04/2014","05/2014","06/2014","07/2014","08/2014","09/2014","10/2014","11/2014","12/2014","01/2015","02/2015","03/2015","04/2015","05/2015","06/2015","07/2015","08/2015","09/2015","10/2015","11/2015","12/2015","01/2016","02/2016","03/2016","04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016","01/2017","02/2017","03/2017","04/2017","05/2017","06/2017","07/2017","08/2017","09/2017","10/2017","11/2017","12/2017","01/2018","02/2018","03/2018","04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018","01/2019","02/2019","03/2019","04/2019","05/2019","06/2019","07/2019","08/2019","09/2019","10/2019","11/2019","12/2019","01/2020","02/2020","03/2020","04/2020","05/2020","06/2020","07/2020","08/2020","09/2020","10/2020","11/2020","12/2020","01/2021","02/2021"];

const m4Data3Month = [-0.7,-1.9,-1.2,2.5,3.9,5.9,-0.5,-0.5,1,5.3,4.8,0.9,1.8,2.3,3,4,3.4,1.1,-0.7,0,7.9,8.3,6.5,2.6,3.1,7.2,5.3,5.9,5.4,4.3,2.7,1.1,5.9,7.4,7.8,4.3,2.3,3.3,2.2,5,6.6,2.8,0,-0.2,6,8.4,5.6,4.7,2.2,2.4,1.9,3.7,4.3,5.3,3.8,2.7,4.1,7.3,7.3,3.6,2.6,0.5,2.7,4.4,7.4,5.4,2.2,2.6,7.5,7.5,8.3,8.9,14.3,10.6,9.5,6.1,5.9,3.4,-1.2,1.7,5.6,10.9,9.3,6.3,1.9,4.5,3.2,6.1,4.7,4.2,2.3,0.2,1.9,2.3,7.5,4.5,2.8,-0.8,-0.7,3.1,2.8,4.1,-0.6,-0.8,0.9,5.8,6.5,4,4.1,5.3,5.9,4.9,5.6,4.6,3.2,1.2,15.3,26.1,36.7,22.3,17.8,6.5,5.4,7.2,13.9,15,9.8,6.1];

const rentseekYear = ["1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]
const rentseekY = [37.4,35.6,35.7,35.1,34.9,35.3,36.4,37.4,38.8,40,39.9,39.8,40.1,43.6,46.3,45.8,44.7,44.2,42.5,42,41,40.4,40.2,39.5,39.8,54.4]


const bubbleData = {
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 25,
        y: 25,
        r: 25
      }],
      backgroundColor: 'rgb(80, 117, 171)',
      
    },
    {
        label: 'Second Dataset',
        data: [{
            x: 55,
            y: 65,
            r: 60
        }],
        backgroundColor: 'rgb(80, 117, 171)'
    }],
  };


Chart.defaults.global.defaultFontColor = 'white';

let m4xChart12Month = new Chart(slideOneCanvas, {
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


let m4xChart3Month = new Chart(slideTwoCanvas, {
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