$(document).ready(function() {
    $(".main-img").addClass("animated bounceIn");
    $("#chihayafuru_link").mouseover(function(){
        $("#chihayafuru_link").css("color", "gray");
        $("#chihayafuru_link").css("font-weight", "bold");
    });
    $("#sa_link").mouseover(function(){
        $("#sa_link").css("color", "gray");
        $("#sa_link").css("font-weight", "bold");
    });
    $("#chihayafuru_link").mouseout(function(){
        $("#chihayafuru_link").css("color", "cadetblue");
        $("#chihayafuru_link").css("font-weight", "normal");
    });
    $("#sa_link").mouseout(function(){
        $("#sa_link").css("color", "cadetblue");
        $("#sa_link").css("font-weight", "normal");
    });
});
