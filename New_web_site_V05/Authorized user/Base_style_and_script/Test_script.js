function sayHi() {
					$(document).ready(function(){
						$(".res").show();
						$(".main").hide();
						$(".countdown").hide();
				})
				}

$(document).ready(function(){
					$("#next0").click(function(){
						$(".strt").toggle();
						setTimeout(sayHi, 15 * 60 * 1000);
						$(".quizsection1").toggle();
						var timer2 = "14:59";
		var interval = setInterval(function() {


	  var timer = timer2.split(':');
	  //by parsing integer, I avoid all extra string processing
	  var minutes = parseInt(timer[0], 10);
	  var seconds = parseInt(timer[1], 10);
	  --seconds;
	  minutes = (seconds < 0) ? --minutes : minutes;
	  if (minutes < 0) clearInterval(interval);
	  seconds = (seconds < 0) ? 59 : seconds;
	  seconds = (seconds < 10) ? '0' + seconds : seconds;
	  //minutes = (minutes < 10) ?  minutes : minutes;
	  $('.countdown').html(minutes + ':' + seconds);
	  timer2 = minutes + ':' + seconds;
	}, 1000);
						$(".countdown").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next1").click(function(){
						$(".quizsection1").toggle();
						$(".quizsection2").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next2").click(function(){
						$(".quizsection2").toggle();
						$(".quizsection3").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next3").click(function(){
						$(".quizsection3").toggle();
						$(".quizsection4").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next4").click(function(){
						$(".quizsection4").toggle();
						$(".quizsection5").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next5").click(function(){
						$(".quizsection5").toggle();
						$(".quizsection6").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next6").click(function(){
						$(".quizsection6").toggle();
						$(".quizsection7").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next7").click(function(){
						$(".quizsection7").toggle();
						$(".quizsection8").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next8").click(function(){
						$(".quizsection8").toggle();
						$(".quizsection9").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#next9").click(function(){
						$(".quizsection9").toggle();
						$(".quizsection10").toggle();
					})
				})
					
				$(document).ready(function(){
					$("#next10").click(function(){
						$(".quizsection10").toggle();
						$(".res").toggle();
						$(".countdown").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#early2").click(function(){
						$(".quizsection1").toggle();
						$(".quizsection2").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#early3").click(function(){
						$(".quizsection2").toggle();
						$(".quizsection3").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#early4").click(function(){
						$(".quizsection3").toggle();
						$(".quizsection4").toggle();
					})
				})
						
				$(document).ready(function(){
					$("#early5").click(function(){
						$(".quizsection4").toggle();
						$(".quizsection5").toggle();
					})
				})	
				
				$(document).ready(function(){
					$("#early6").click(function(){
						$(".quizsection5").toggle();
						$(".quizsection6").toggle();
					})
				})
				
				$(document).ready(function(){
					$("#early7").click(function(){
						$(".quizsection6").toggle();
						$(".quizsection7").toggle();
					})
				})
								
				$(document).ready(function(){
					$("#early8").click(function(){
						$(".quizsection7").toggle();
						$(".quizsection8").toggle();
					})
				})
								
				$(document).ready(function(){
					$("#early9").click(function(){
						$(".quizsection8").toggle();
						$(".quizsection9").toggle();
					})
				})
								
				$(document).ready(function(){
					$("#early10").click(function(){
						$(".quizsection9").toggle();
						$(".quizsection10").toggle();
					})
				})
