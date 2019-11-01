(function() {
	var hashTag = location.hash;
	if (hashTag.indexOf('#online') === -1) {
		location.href ='model/login/login.html';
	}
})();