(function($) {
	function $$(_selector) {
		return document.querySelector ? document.querySelector(_selector) : null;
	}
	function $$$(_selector) {
		return document.querySelectorAll ? document.querySelectorAll(_selector) : [];
	}
	
	var sideMenu_title = $$$('.sideMenu > .title');
	for (var i = 0; i < sideMenu_title.length; i++) {
		let sideMenu = sideMenu_title[i].parentNode;
		if (!sideMenu.classList.contains('expanded')) {
			$(sideMenu).find('ul').slideToggle(0);
		}
		sideMenu_title[i].addEventListener('click', function() {
			sideMenu.classList.toggle('expanded');
			$(sideMenu).find('ul').slideToggle(400);
		});
	}
})(jQuery);