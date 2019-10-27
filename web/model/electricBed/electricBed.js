(function() {
	function $(_selector) {
		return document.querySelectorAll(_selector);
	}
	
	function getStyle(_target, _property) {
		return window.getComputedStyle ? getComputedStyle(_target).getPropertyValue(_property) : _target.currentStyle[_property];
	}
	
	let movableItems = $('.movableRange > .movableItem');
	for (let i = 0; i < movableItems.length; i++) {
		movableItems[i].addEventListener('mousedown', onMouseDown.bind(movableItems[i]));
	}
	
	
	
	function onMouseDown() {
		const e = arguments[0];
		
		this.positionX = parseInt(getStyle(this, 'left'));
		this.positionY = parseInt(getStyle(this, 'top'));
		this.startX = e.clientX;
		this.startY = e.clientY;
		
		this.onMouseMove = onMouseMove.bind(this);
		this.onMouseUp = onMouseUp.bind(this);
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('mouseup', this.onMouseUp);
	}
	
	function onMouseMove() {
		const e = arguments[0];
		var limit = 0; //inside { 0: 'both', 1: 'vertical', 2: 'horizontal', 3: 'none' }
		var targetLeft = e.clientX - this.startX + this.positionX;
		var targetTop = e.clientY - this.startY + this.positionY;
		var parent = this.parentNode;
		
		if (limit == 0) {
			this.style.left = e.clientX - this.startX + this.positionX + 'px';
			this.style.top = e.clientY - this.startY + this.positionY + 'px';
		} else if (limit == 1) {
			//限制容器內垂直
			if (targetTop > 0) {
				if (targetTop + parseInt(this.style.height) < parseInt(parent.style.height))
					this.style.top = targetTop + 'px';
				else this.style.top = parseInt(parent.style.height) - parseInt(this.style.height);
			} else {
				this.style.top = 0;
			}
		} else if (limit == 2) {
			//限制容器內水平
			if (targetLeft > 0) {
				if (targetLeft + parseInt(this.style.width) < parseInt(parent.style.width))
					this.style.left = targetLeft + 'px';
				else this.style.left = parseInt(parent.style.width) - parseInt(this.style.width);
			} else {
				this.style.left = 0;
			}
		}
	}
	
	function onMouseUp() {
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
	}
})();