$(function(){
	$(".action").click(function(event){
		event.preventDefault();
		$(".box_nav").removeClass("fifty").addClass("sixteen active_nav");
		$(".box_main").removeClass("fifty").addClass("eighty");
	});

	$(".logo").click(function(event){
		event.preventDefault();
		$(".box_nav").removeClass("sixteen active_nav").addClass("fifty widthsixteen");
		$(".box_main").removeClass("eighty").addClass("fifty widtheighty");
	});
});