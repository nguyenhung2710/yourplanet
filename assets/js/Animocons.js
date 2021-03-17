;(function(window) {

	'use strict';

	function isIOSSafari() {
		var userAgent;
		userAgent = window.navigator.userAgent;
		return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
	};

	function isTouch() {
		var isIETouch;
		isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
		return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
	};

	var isIOS = isIOSSafari(),
		clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function Animocon(el, options) {
		this.el = el;
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this.checked = false;
		this.timeline = new mojs.Timeline();
		for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
			this.timeline.add(this.options.tweens[i]);
		}
		var self = this;
		this.el.addEventListener(clickHandler, function() {
			if( self.checked ) {
				self.options.onUnCheck();
			}
			else {
				self.options.onCheck();
				self.timeline.replay();
			}
			self.checked = !self.checked;
		});
	}

	function init() {
		var el2 = document.querySelector('button.intro-btn');
		new Animocon(el2, {
			tweens : [
				new mojs.Shape({
                    top: '50%',
                    left: "30%",
                    parent: el2,
                    radius: { 0: 50 },
                    fill: 'transparent',
                    stroke: '#C0C1C3',
                    strokeWidth: { 35: 0 },
                    opacity: 0.6,
                    duration: 600,
                    delay: 2000,
                    easing: mojs.easing.ease.inout
				}),
			],
			onCheck : function() {},
			onUnCheck : function() {}
		});
	};
	init();
})(window);