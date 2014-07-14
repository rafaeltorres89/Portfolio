$(function(){
<<<<<<< HEAD
    $(".sixteen").hide();
    $(".eighty").hide();
    $("aside").hide();

    $("#action").click(function(event){
        event.preventDefault();
        $("#nav").removeClass("fifty").addClass("sixteen container_active");
        $("#main").removeClass("fifty").addClass("eighty");
    });
=======
	$(".action").click(function(event){
		event.preventDefault();
		$(".box_nav").removeClass("fifty").addClass("sixteen active_nav");
		$(".box_main").removeClass("fifty").addClass("eighty");
	});

	$(".home").click(function(event){
		event.preventDefault();
		$(".box_nav").removeClass("sixteen active_nav").addClass("fifty");
		$(".box_main").removeClass("eighty").addClass("fifty");
	});
>>>>>>> FETCH_HEAD
});