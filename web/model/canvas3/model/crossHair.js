(function() {
	window.onload = function() {
		CanvasJS.addColorSet('my', ['#e17f10']);
		var chart = new CanvasJS.Chart('crossHair', {
			animationEnabled: true,
			colorSet: 'my',
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
				}
			},
			axisY: {
				labelFontSize: 15,
				title: '',
				includeZero: false,
				valueFormatString: '##0.00',
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return '$' + CanvasJS.formatNumber(e.value, '##0.00');
					}
				}
			},
			data: [
				{
					type: 'area',
					xValueFormatString: '#0點',
					yValueFormatString: '##0.00mg/dl',
					dataPoints: [
						{ x: 0, y: 76.727997 },
						{ x: 2, y: 75.459999 },
						{ x: 4, y: 76.011002 },
						{ x: 6, y: 75.751999 },
						{ x: 8, y: 77.5 },
						{ x: 10, y: 77.436996 },
						{ x: 12, y: 79.650002 },
						{ x: 14, y: 79.750999 },
						{ x: 16, y: 80.169998 },
						{ x: 18, y: 79.57 },
						{ x: 20, y: 80.699997 },
						{ x: 22, y: 79.686996 },
						{ x: 24, y: 78.996002 }
					]
				}
			]
		});
		chart.render();
	};
})();
