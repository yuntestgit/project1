(function() {
	function rand(min, max) {
		return Math.random() * (max - min) + min;
	}
	// var chartdata = [
	// 	{ x: 0, y: 0 },
	// 	{ x: 1, y: 1 },
	// 	{ x: 2, y: 2 },
	// 	{ x: 3, y: 3 },
	// 	{ x: 4, y: 4 },
	// 	{ x: 5, y: 5 },
	// 	{ x: 6, y: 6 },
	// 	{ x: 7, y: 7 },
	// 	{ x: 8, y: 8 },
	// 	{ x: 9, y: 9 }
	// ];
	
	var chartdata = [];
	for (var i = 0; i <= 23; i++) {
		chartdata.push({
			x: i,
			y: rand(0, 100)
		});
	}
	
	CanvasJS.addColorSet('myColor', ['#e17f10']);
	var chart = new CanvasJS.Chart('crossHair', {
		animationEnabled: true,
		colorSet: 'myColor',
		title: {
			text: '血糖',
			verticalAlign: 'bottom',
			horizontalAlign: 'center'
		},
		axisX: {
			labelFontSize: 15,
			xValueFormatString: '#0',
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			},
			// gridThickness: 1,
			interval: 1
		},
		axisY: {
			labelFontSize: 15,
			yValueFormatString: '00',
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			},
			interval: 10
		},
		data: [
			{
				// type: 'area',
				type: 'line',
				xValueFormatString: '#0點',
				yValueFormatString: '##0.00mg/dl',
				dataPoints: chartdata
			}
		]
	});
	chart.render();
	
	updateChart();
	
	function updateChart() {		
		chartdata.splice(0, 1);
		
		for (var i = 0; i < chartdata.length; i++) {
			chartdata[i].x -=1;
		}
		chartdata.push({
			x: chartdata[chartdata.length - 1].x + 1,
			y: rand(0, 100)
		});
		chart.render();
		
		setTimeout(function () { updateChart() }, 1000);
	}
})();