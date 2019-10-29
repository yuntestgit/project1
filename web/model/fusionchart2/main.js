FusionCharts.ready(function() {
	var fusioncharts2 = new FusionCharts({
		type: 'column2d',
		renderAt: 'fusioncharts1',
		width: '200%',
		height: '200%',
		dataFormat: 'json',
		dataSource: {
			// Chart Configuration
			chart: {
				baseFont: "Verdana",
				baseFontSize: "0",
				baseFontColor: "#0066cc",
				
				outCnvBaseFont: "Arial",
				outCnvBaseFontSize: "0",
				outCnvBaseFontColor: "#633563",
	
				caption: 'Countries With Most Oil Reserves [2017-18]',
				subCaption: 'In MMbbl = One Million barrels',
				xAxisName: 'Country',
				yAxisName: 'Reserves (MMbbl)',
				numberSuffix: 'K',
				theme: 'fusion'
			},
			// Chart Data
			data: [
				{
					label: 'Venezuela',
					value: '290'
				},
				{
					label: 'Saudi',
					value: '260'
				},
				{
					label: 'Canada',
					value: '180'
				},
				{
					label: 'Iran',
					value: '140'
				},
				{
					label: 'Russia',
					value: '115'
				},
				{
					label: 'UAE',
					value: '100'
				},
				{
					label: 'US',
					value: '30'
				},
				{
					label: 'China',
					value: '30'
				}
			]
		}
	});
	fusioncharts2.render();
	
	var fusioncharts3 = new FusionCharts({
		type: 'column2d',
		renderAt: 'fusioncharts2',
		width: '100%',
		height: '300',
		dataFormat: 'json',
		dataSource: {
			// Chart Configuration
			chart: {
				caption: 'Countries With Most Oil Reserves [2017-18]',
				subCaption: 'In MMbbl = One Million barrels',
				xAxisName: 'Country',
				yAxisName: 'Reserves (MMbbl)',
				numberSuffix: 'K',
				theme: 'fusion'
			},
			// Chart Data
			data: [
				{
					label: 'Venezuela',
					value: '290'
				},
				{
					label: 'Saudi',
					value: '260'
				},
				{
					label: 'Canada',
					value: '180'
				},
				{
					label: 'Iran',
					value: '140'
				},
				{
					label: 'Russia',
					value: '115'
				},
				{
					label: 'UAE',
					value: '100'
				},
				{
					label: 'US',
					value: '30'
				},
				{
					label: 'China',
					value: '30'
				}
			]
		}
	});
	fusioncharts3.render();
});