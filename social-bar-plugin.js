(function(){

	$.fn.socialBar = function(options){

		var settings = $.extend({
			speedIn: 500,
			speedOut: 300,
			selector: ".social-bar-item"
		}, options);

		$(settings.selector).hover(function(){
			$(this).stop().animate({
				left: 0
			}, settings.speedIn);
		}, function(){
			$(this).stop().animate({
				left: -45 + "px"
			}, settings.speedOut);
		});
	}

}());