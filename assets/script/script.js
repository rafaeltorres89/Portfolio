$(function(){
    $(".sixteen").hide();
    $(".eighty").hide();
    $("aside").hide();

    $("#action").click(function(event){
        event.preventDefault();
        $("#nav").removeClass("fifty").addClass("sixteen container_active");
        $("#main").removeClass("fifty").addClass("eighty");
    });
});