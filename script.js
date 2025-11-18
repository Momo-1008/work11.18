Highcharts.chart('container', {

    title: {
        text: '104年 ~ 113年 來臺(國籍)人次統計',
        align: 'left'
    },

    subtitle: {
        text: '資料來源: 觀光署',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2022'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [
	{
        name: '日本',
        data: [
            1629193, 1896456, 1895546, 1966303, 2162426, 268798, 9910, 87133, 926140, 1318372
        ]
    }, 
	{
        name: '韓國',
        data: [
            662670, 887412, 1055207, 1021530, 1245144, 179190, 3165, 51480, 745885, 1010035
        ]
    }, 
	{
        name: '泰國',
        data: [
            121337, 193200, 289801, 317086, 410385, 63303, 7534, 74356, 391573, 397168
        ]
    } 
	],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});