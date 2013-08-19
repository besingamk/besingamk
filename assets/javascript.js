var aTime = 2000;

$(document).ready(function() {
	setTimeout(function() {
		$('.container').show().addClass('animated fadeInDown');

		setTimeout(function() {
			$('.textlogo > p').css({visibility: "visible"});
			$('.textlogo > p').textillate({
				in: {
					effect: 'fadeInLeft'
				}
			});
			$('.texttitle > p').css({visibility: "visible"});
			$('.texttitle > p').textillate({
				in: {
					effect: 'fadeInRight'
				}
			});
		}, 4000);

		$('.loading').hide();

		


		setTimeout(function() {
			$('.main_menu').css({visibility: "visible"}).addClass('animated bounceIn');
		}, 1000);

		setTimeout(function() {
			$('.footer').css({visibility: "visible"}).addClass('animated fadeInDown')
		}, 1900);

		setTimeout(function() {
			$('.features > p').css({visibility: "visible"});
			$('.features > p').textillate({
				in: {
					effect: 'bounceIn',
					sync: true
				}
			});
		}, 2000);

		setTimeout(function() {
			$('.nav > ul > li').show();
			$('.nav > ul > li').textillate({
				in: {
					effect: 'fadeIn',
					delay: 100,
					shuffle: 'true'
				}
			});
		}, 2000);
	}, aTime);


	var count = 0;
	var aboutMenu = $('#about_me');
	var portMenu = $('#portfolio');
	var contactMenu = $('#contact');
	var con = $('.content');

	// aboutMenu.click(function() {
	// 	count++;
	// 	var isEven = function(someNumber) {
	// 	    return (someNumber % 2 === 0) ? true : false;
	// 	};
	// 	if (isEven(count) === false) {
	// 	    TweenMax.to(con, 1, {height: '300px', background: '#FF2E12', ease:Expo.easeInOut});
	// 	    setTimeout(function() {
	// 	    	$('.aboutme').show().removeClass('bounceOut').addClass("bounceIn");
	// 		}, 1000);	    
	// 	} else if (isEven(count) === true) {
	// 		$('.aboutme').addClass("bounceOut");
	// 		setTimeout(function() {
	// 			TweenMax.to(con, 1, {height: '0', ease:Bounce.easeOut});
	// 		}, 1000);		
	// 	}
	// });

	// portMenu.click(function() {
	// 	count++;
	// 	var isEven = function(someNumber) {
	// 	    return (someNumber % 2 === 0) ? true : false;
	// 	};
	// 	if (isEven(count) === false) {
	// 	    TweenMax.to(con, 1, {height: '300px', background: '#1FAEFF', ease:Expo.easeInOut});
	// 	    setTimeout(function() {
	// 	    	$('.portfolio').show().removeClass('bounceOut').addClass("bounceIn");
	// 		}, 1000);	    
	// 	} else if (isEven(count) === true) {
	// 		$('.aboutme').addClass("bounceOut");
	// 		$('.portfolio').addClass("bounceOut");
	// 		setTimeout(function() {
	// 			TweenMax.to(con, 1, {height: '0', ease:Bounce.easeOut});
	// 		}, 1000);		
	// 	}
	// });

	// contactMenu.click(function() {
	// 	count++;
	// 	var isEven = function(someNumber) {
	// 	    return (someNumber % 2 === 0) ? true : false;
	// 	};
	// 	if (isEven(count) === false) {
	// 	    TweenMax.to(con, 1, {height: '300px', background: '#00C13F', ease:Expo.easeInOut});
	// 	 //    setTimeout(function() {
	// 	 //    	box.show().removeClass('bounceOut').addClass("bounceIn");
	// 		// }, 1000);	    
	// 	} else if (isEven(count) === true) {
	// 		// box.addClass("bounceOut");
	// 		//setTimeout(function() {
	// 			TweenMax.to(con, 1, {height: '0', ease:Bounce.easeOut});
	// 		//}, 1000);		
	// 	}
	// });

}); // end of document ready




$('.textloading').textillate({
	minDisplayTime: 2000,
	in: {
		effect: 'fadeInRightBig'
	}
});