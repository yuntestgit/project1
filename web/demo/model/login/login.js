(function($) {
	const testaccpwd = 'test'
	$('#account').val(testaccpwd);
	$('#password').val(testaccpwd);
	
	var login_form = $('.login-form')[0];
	var action_button = $(login_form).find('.btn')[0];
	action_button.addEventListener('click', function() {
		var account = $(this).find('#account').val();
		var password = $(this).find('#password').val();
		
		if (account === testaccpwd && password === testaccpwd) {
			location.href = '../../index.html#online';
		} else {
			let msgbox = $('.msgbox')[0];
			msgbox.activeEvent();
			// alert(msgbox.activeEvent);
		}
	}.bind(login_form));
})(jQuery);
