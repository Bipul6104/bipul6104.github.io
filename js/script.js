 $(window).scroll(function() { 
  if ($(window).scrollTop() > 500) {
    $('.header-area').addClass('sticky-nav');
  } else {
    $('.header-area').removeClass('sticky-nav');
  }
});  
$(document).ready(function(){
	$('.bar').click(function(){
		$('.bar').toggleClass('off');
		$('.menu').toggleClass('offf');

	});
});

$(document).ready(function(){
	$('.parent-container').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{
			enabled:true
		}
	});
});
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items:2,
		loop:true,
		center:true,
		nav:false,
		autoplayTimeout: 1500,
		dots:true,
		autoplayHoverPause: true,
		smartSpeed: 1000,
		autoplay:true,
		responsive:{
			767:{
				items:2
			},
			550:{
				items:3
			},
			220:{
				items:1
			},
		}
	});

});

$(document).ready(function(){
	$('.bar').click(function(){
		$('.header-area').toggleClass('off');
	});
});

$(document).ready(function(){
	$('.go').click(function(){
		$('.header-area').addClass('off');
	})
})

let counters = document.querySelectorAll('.counter');
let time = 1000;

counters.forEach(counter => {
	let updateCount = () => {
		let target = +counter.getAttribute('data-target');
		let count = +counter.innerText;
		let increment = target / time;

		if(count < target){
			counter.innerText = Math.ceil(count + increment);
			setTimeout(updateCount,100);
		}
			else{counter.innerText = target;}
	};
			updateCount();
});

new WOW().init();

