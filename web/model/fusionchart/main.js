// (function() {
// 	var head_array = new Array();
// 	var foot_array = new Array();
// 	var group_data = JSON.parse('<%- JSON.stringify(muti_data) %>');
// 	var group_name = JSON.parse('<%- JSON.stringify(muti_name) %>');
// 	var count = 0;
// 	for (var i = 0; i < group_data.length; i++) {
// 		for (var y = 0; y < group_data[i].length; y++) {
// 			var x = new Array();
// 			var z = new Array();
// 			x[0] = parseInt(group_data[i][y].Head, 10);
// 			z[0] = parseInt(group_data[i][y].Foot, 10);
// 			x[1] = z[1] = group_name[i][0].Name;
// 			x[2] = z[2] = group_data[i][y].Time.split(' ')[0] + ' ' + group_data[i][y].Time.split(' ')[1];
// 			head_array[count] = x;
// 			foot_array[count] = z;
// 			count++;
// 		}
// 	}
// 	var head_schema = [
// 		{
// 			name: '背部',
// 			type: 'number'
// 		},
// 		{
// 			name: 'Type',
// 			type: 'string'
// 		},
// 		{
// 			name: 'Time',
// 			type: 'date',
// 			format: '%Y-%m-%d %H:%M:%S'
// 		}
// 	];
// 	// console.log(head_array);
// 	// console.log(foot_array);

// 	var headDataStore = new FusionCharts.DataStore();
// 	var headTable = headDataStore.createDataTable(head_array, head_schema);

// 	new FusionCharts({
// 		type: 'timeseries',
// 		renderAt: 'head_chart',
// 		width: '90%',
// 		height: 650,
// 		dataSource: {
// 			data: headTable,
// 			caption: {
// 				text: 'Online Sales of a SuperStore in the US'
// 			},
// 			series: 'Type',
// 			yAxis: [
// 				{
// 					plot: {
// 						value: '背部', //對應schema的欄位
// 						connectNullData: true,
// 						style: {
// 							'line.null': {
// 								'stroke-dasharray': '10',
// 								stroke: '#d0d0d0'
// 							},
// 							border: 30
// 						},
// 						lineThickness: '20'
// 					},
// 					min: '0',
// 					max: '66',
// 					referenceLine: [
// 						{
// 							label: '上限值',
// 							value: 30
// 						}
// 					],
// 					format: {
// 						Suffix: '°'
// 					}
// 				}
// 			],
// 			xAxis: {
// 				initialinterval: {
// 					from: '07-Sep-19',
// 					to: '07-Sep-19'
// 				}
// 			},
// 			chart: {
// 				exportEnabled: '1' //Enable Export Feature
// 			}
// 		}
// 	}).render();

// 	var foot_schema = [
// 		{
// 			name: '腿部',
// 			type: 'number'
// 		},
// 		{
// 			name: 'Type',
// 			type: 'string'
// 		},
// 		{
// 			name: 'Time',
// 			type: 'date',
// 			format: '%Y-%m-%d %H:%M:%S'
// 		}
// 	];
// 	var footDataStore = new FusionCharts.DataStore();
// 	var footTable = footDataStore.createDataTable(foot_array, foot_schema);

// 	new FusionCharts({
// 		type: 'timeseries',
// 		renderAt: 'foot_chart',
// 		width: '90%',
// 		height: 650,
// 		dataSource: {
// 			data: footTable,
// 			caption: {
// 				text: 'Online Sales of a SuperStore in the US'
// 			},
// 			series: 'Type',
// 			yAxis: [
// 				{
// 					plot: {
// 						value: '腿部', //對應schema的欄位
// 						connectNullData: true,
// 						style: {
// 							'line.null': {
// 								'stroke-dasharray': '10',
// 								stroke: '#d0d0d0'
// 							},
// 							border: 30
// 						},
// 						lineThickness: '20'
// 					},
// 					min: '0',
// 					max: '28',
// 					referenceLine: [
// 						{
// 							label: '上限值',
// 							value: 15
// 						}
// 					],
// 					format: {
// 						Suffix: '°'
// 					}
// 				}
// 			],
// 			chart: {
// 				exportEnabled: '1' //Enable Export Feature
// 			}
// 		}
// 	}).render();
// })();

FusionCharts.ready(function() {
	var fusioncharts2 = new FusionCharts({
		type: 'column2d',
		renderAt: 'fusioncharts1',
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