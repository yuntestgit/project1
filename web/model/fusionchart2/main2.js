var temp_array = new Array();
var database_data = [{"id":1,"Breathe":88,"Bloodoxygen":0,"Heartrate":0,"Time":"2019-10-05 15:22:51","Class":"73C7cB4D66","Status":1}];

for (var i = 0; i < database_data.length; i++) {
	var x = new Array();
	x[0] = parseInt(database_data[i].Breathe, 10);
	x[1] = parseInt(database_data[i].Bloodoxygen, 10);
	x[2] = parseInt(database_data[i].Heartrate, 10);
	x[3] = database_data[i].Time.split(' ')[0] + ' ' + database_data[i].Time.split(' ')[1];
	temp_array[i] = x;
}
var ss = [{"name":"呼吸率","type":"number","column":"呼吸率","index":0},{"name":"血氧","type":"number","column":"血氧","index":1},{"name":"心率","type":"number","column":"心率","index":2},{"name":"Time","type":"date","format":"%Y-%m-%d %H:%M:%S","column":"Time","index":3}];
var fusionDataStore = new FusionCharts.DataStore();
var fusionTable = fusionDataStore.createDataTable(temp_array, ss);

// if ('<%- threshold[0].Threshold %>')
if (true) {
	var database_threshold = JSON.parse('["66","72","10"]');
	// console.log(database_threshold);
	
	new FusionCharts({
		type: 'timeseries',
		renderAt: 'container',
		width: '90%',
		height: 650,
		dataSource: {
			data: fusionTable,
			yAxis: [
				{
					plot: {
						value: '呼吸率', //對應schema的欄位
						connectNullData: true,
						style: {
							'line.null': {
								'stroke-dasharray': '10',
								stroke: '#d0d0d0'
							},
							border: 30
						},
						lineThickness: '20'
					},
					min: '0',
					max: '100',
					referenceLine: [
						{
							label: '告警值',
							value: database_threshold[0]
						}
					]
				},
				{
					plot: {
						value: '血氧',
						connectNullData: true,
						style: {
							'line.null': {
								'stroke-dasharray': '10',
								stroke: '#d0d0d0'
							}
						}
					},
					min: '0',
					max: '150',
					referenceLine: [
						{
							label: '告警值',
							value: database_threshold[1]
						}
					]
				},
				{
					plot: {
						value: '心率',
						connectNullData: true,
						style: {
							'line.null': {
								'stroke-dasharray': '10',
								stroke: '#d0d0d0'
							}
						}
					},
					min: '0',
					max: '150',
					referenceLine: [
						{
							label: '告警值',
							value: database_threshold[2]
						}
					]
				}
			],
			xAxis: {
				initialinterval: {
					from: '07-Sep-19',
					to: '07-Sep-19'
				}
			},
			chart: {
				exportEnabled: '1' //Enable Export Feature
			}
		}
	}).render();
	
} else {
	new FusionCharts({
		type: 'timeseries',
		renderAt: 'container',
		width: '90%',
		height: 650,
		dataSource: {
			data: fusionTable,
			yAxis: [
				{
					plot: {
						value: '呼吸率', //對應schema的欄位
						connectNullData: true,
						style: {
							'line.null': {
								'stroke-dasharray': '10',
								stroke: '#d0d0d0'
							},
							border: 30
						},
						lineThickness: '20'
					},
					min: '0',
					max: '100'
				},
				{
					plot: {
						value: '血氧',
						connectNullData: true,
						style: {
							'line.null': {
								'stroke-dasharray': '10',
								stroke: '#d0d0d0'
							}
						}
					},
					min: '0',
					max: '150'
				},
				{
					plot: {
						value: '心率',
						connectNullData: true,
						style: {
							'line.null': {
								'stroke-dasharray': '10',
								stroke: '#d0d0d0'
							}
						}
					},
					min: '0',
					max: '150'
				}
			],
			xAxis: {
				initialinterval: {
					from: '07-Sep-19',
					to: '07-Sep-19'
				}
			},
			chart: {
				exportEnabled: '1' //Enable Export Feature
			}
		}
	}).render();
}
