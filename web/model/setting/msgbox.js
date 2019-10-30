(function() {
	let msgbox = $('.msgbox');
	for (let i = 0; i < msgbox.length; i++) {
		//fadeIn
		function activeEvent() {
			//initialize
			if (!$(this).hasClass('show')) {
				$(this).addClass('show');
				$(this).fadeOut(0);
			}
			//淡入動畫
			$(this).fadeIn(500);
		}
		//fadeOut
		function closeEvent() {
			$(this).fadeOut(400);
		}
		
		//啟動button click事件
		let activeBtnsText = $(msgbox[i]).find('> .box > .active').val();
		let activeBtnsId = eval(activeBtnsText);
		for (let j = 0; j < activeBtnsId.length; j++) {
			$('#' + activeBtnsId[j])[0].addEventListener('click', activeEvent.bind(msgbox[i]));
		}
		
		//右上角x button click事件
		let closeBtn = $(msgbox[i]).find('> .box > .close')[0];
		closeBtn.addEventListener('click', closeEvent.bind(msgbox[i]));
		
		//取消button click事件
		let cancelBtn = $(msgbox[i]).find('> .box > .operatingArea > button.negative')[0];
		cancelBtn.addEventListener('click', closeEvent.bind(msgbox[i]));
	}
})();