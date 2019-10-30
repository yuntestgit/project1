FusionCharts.ready(function() {
	var fusioncharts1 = new FusionCharts({
		type: 'column2d',
		renderAt: 'fusioncharts1',
		width: '100%',
		height: '100%',
		dataFormat: 'json',
		dataSource: {
			// Chart Configuration
			chart: {
				baseFontSize: '50',
				baseFontColor: '#f00',

				// outCnvBaseFont: "Arial",
				// outCnvBaseFontSize: "50",
				// outCnvBaseFontColor: "#633563",

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
	fusioncharts1.render();

	var fusioncharts2 = new FusionCharts({
		type: 'column2d',
		renderAt: 'fusioncharts2',
		width: '100%',
		height: '100%',
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
	fusioncharts2.render();

	/** @test */

	(function() {
		Promise.all([
			loadData('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/plotting-missing-data-data.json'),
			loadData('https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/plotting-missing-data-schema.json')
		]).then(function() {
			const data = res[0];
			const schema = res[1];

			const dataStore = new FusionCharts.DataStore();
			const dataSource = {
				chart: {},
				caption: {
					text: 'Pollution Report of Yatcha Street'
				},
				subcaption: {
					text: 'An industrial town'
				},
				yaxis: [
					{
						plot: 'Pollution',
						title: 'Pollutant Concentration (in ppm)',
						min: '130'
					}
				]
			};
			dataSource.data = dataStore.createDataTable(data, schema);

			new FusionCharts({
				type: 'timeseries',
				renderAt: 'chart-container',
				width: '100%',
				height: '500',
				dataSource: dataSource
			}).render();
		});
	})();
});
