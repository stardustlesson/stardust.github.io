$(document).ready(function(){
	$("#menu_button_open").click(function(){
		$(".negativ_bar").toggle();
		$("#menu_button_open").toggle();
		$("#menu_button_close").toggle();
	})
})

$(document).ready(function(){
	$("#menu_button_close").click(function(){
		$(".negativ_bar").toggle();
		$("#menu_button_open").toggle();
		$("#menu_button_close").toggle();
	})
})

$(document).ready(function(){
	$('.personal_office').click(function () {
		window.location.href = '../Personal_office/Personal_office.html';
		return false;
	})
})

$(document).ready(function(){
	$('.my_course').click(function () {
		window.location.href = '../My_course/Choose_them.html';
		return false;
	})
})

$(document).ready(function(){
	$('.comment').click(function () {
		window.location.href = '../Comment/Comment.html';
		return false;
	})
})

$(document).ready(function(){
	$('.about_us').click(function () {
		window.location.href = '../About_us/About_us.html';
		return false;
	})
})
$(document).ready(function(){
	$('.glavnaya').click(function () {
		window.location.href = '../hamb/Basic.html';
		return false;
	})
})