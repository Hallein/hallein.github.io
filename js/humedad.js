
var hoja1 = document.getElementById("hoja1");
var hoja2 = document.getElementById("hoja2");
var hoja3 = document.getElementById("hoja3");
var hoja4 = document.getElementById("hoja4");

var data = {
    labels: [	"12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    			"18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    		],
    datasets: [
        {
            label: "Humedad",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(251, 192, 45, 0.5)",
            borderColor: "rgba(251, 192, 45, 1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(251, 192, 45, 1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(251, 192, 45, 1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 20,
            data: [	78, 82, 96, 70, 72, 49,
            		35, 57, 60, 55, 67, 77
            	],
            spanGaps: false,
        }
    ]
};

var options = {
	    	scaleFontColor: "#FFFFFF",
	        scales: {
	             xAxes : [ {
	            	display : true,
		            gridLines : {
		                display : false
			            },
			        ticks: {
                        fontColor: "white"
                    }
			        } ],
			    yAxes : [ {
			    	display : true,
		            gridLines : {
		                display : false
			            },
			        ticks: {
                        fontColor: "white"
                    }
			        } ]
	        },
	        legend: {
	            display: false
	        },
	        title: {
            	display: true
        	},
        	layout: {
        		padding: {  
        				top: 10,
        				bottom: 10,
        			}
        	}
	    };

var grafico1 = new Chart(hoja1, {
    type: 'line',
    data: data,
    options: options
});

data.datasets[0].data = [	49, 71, 84, 70, 53, 27,
		            		35, 57, 80, 55, 67, 61
		            	];

var grafico2 = new Chart(hoja2, {
    type: 'line',
    data: data,
    options: options
});

data.datasets[0].data = [	12, 38, 76, 70, 72, 55,
		            		35, 57, 60, 55, 67, 33
		            	];

var grafico3 = new Chart(hoja3, {
    type: 'line',
    data: data,
    options: options
});

data.datasets[0].data = [	78, 82, 55, 70, 72, 49,
		            		35, 57, 60, 55, 67, 15
		            	];

var grafico4 = new Chart(hoja4, {
    type: 'line',
    data: data,
    options: options
});