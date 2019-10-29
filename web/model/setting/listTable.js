(function() {
	function $(_selector) {
		var obj = document.querySelectorAll(_selector);
		var result = null;
		switch (obj.length) {
			case 0:
				result = [];
				break;
			case 1:
				result = obj[0];
				break;
			default:
				result = obj;
				break;
		}
		return result;
	}

	// var listTable = $('.listTable');
	// alert(listTable);
})();

var btn = document.createElement('button');
var table = {
	thead: [['識別碼', 1, 1], ['設備名稱', 1, 1], ['頭部角度', 1, 1], ['腳部角度', 1, 1], ['整床高度', 1, 1]],
	tbody: [
		[['jaygateway', 1, 1], ['jaybed', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], [btn, 1, 1]],
		[['jaygateway', 1, 1], ['jaybed', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], [btn, 1, 1]],
		[['jaygateway', 1, 1], ['jaybed', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], [btn, 1, 1]],
		[['jaygateway', 1, 1], ['jaybed', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], [btn, 1, 1]],
		[['jaygateway', 1, 1], ['jaybed', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], ['暫無', 1, 1], [btn, 1, 1]]
	]
};
