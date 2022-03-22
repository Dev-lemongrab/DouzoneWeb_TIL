// main.js
$(function(){
	$('#demo .inner').click(function() {
		// 선택자.animate( {속성:값, 속성:값,...}, 시간, 이징, 다른할일);
		//$(this).animate({opacity:0, fontSize:'0px'}, 1500); 
		// 이징 : linear, swing
		//$(this).animate({opacity:0, fontSize:'0px'}, 1500, 'linear'); 
		$(this).animate({opacity:0, fontSize:'0px'}, 1500, 'easeInOutSine', function(){
			$(this).animate({opacity:1, fontSize:'1.5em'})
		}); 
	});
} );

 