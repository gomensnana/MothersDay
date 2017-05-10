//document.write("Instead of alert, testing to see js file is loading.");


$("#clickHere").click(function(){
	$("#heart").fadeIn(700);
	$("#one").fadeIn(1200);
	$("#clickHere").fadeOut(500);
	$("#clickOne").fadeIn(1200);
});
$("#clickOne").click(function(){
	$("#heart").fadeOut(700);
	$("#clickOne").fadeOut(700);
	$("#heartTwo").fadeIn(700);
	$("#two").fadeIn(1200);
	$("#clickTwo").fadeIn(1200);
});
$("#clickTwo").click(function(){
	$("#one").fadeOut(700)
	$("#heartTwo").fadeOut(700);
	$("#clickTwo").fadeOut(700);
	$("#two").fadeOut(1200);
	$("#three").fadeIn(1200);
	$("#heartThree").fadeIn(1200);
	$("#clickThree").fadeIn(1200);
});
$("#clickThree").click(function(){
	$("#three").fadeOut(700)
	$("#heartThree").fadeOut(700);
	$("#clickThree").fadeOut(700);
	$("#four").fadeIn(1200);
	$("#heartFour").fadeIn(1200);
	$("#clickFourTwo").fadeIn(1200);
});
//Amended in photos so the labeling becomes confusing here
$("#clickFourTwo").click(function(){
	$("#four").fadeOut(700)
	$("#heartFour").fadeOut(700);
	$("#clickFourTwo").fadeOut(700);
	$("#fourTwo").fadeIn(1200);
	$("#paint").fadeIn(1200);
	$("#clickFourThree").fadeIn(1200);
});
$("#clickFourThree").click(function(){
	$("#fourTwo").fadeOut(700)
	$("#paint").fadeOut(700);
	$("#clickFourThree").fadeOut(700);
	$("#fourThree").fadeIn(1200);
	$("#lift").fadeIn(1200);
	$("#clickFourFour").fadeIn(1200);
});
$("#clickFourFour").click(function(){
	$("#fourThree").fadeOut(700)
	$("#lift").fadeOut(700);
	$("#clickFourFour").fadeOut(700);
	$("#fourFour").fadeIn(1200);
	$("#youth").fadeIn(1200);
	$("#clickFour").fadeIn(1200);
});
$("#clickFour").click(function(){
	$("#fourFour").fadeOut(700)
	$("#youth").fadeOut(700);
	$("#clickFourFour").fadeOut(700);
	$("#five").fadeIn(1200);
	$("#heartFive").fadeIn(1200);
	$("#clickFive").fadeIn(1200);
});
//would have used a for loop but had some issues with Jquery and adjusting parts of elements.
$("#clickFive").click(function(){
	$("#five").fadeOut(700)
	$("#heartFive").fadeOut(700);
	$("#clickFive").fadeOut(700);
	$("#heart").attr("class", "smaller");
	$("#heart").css("float","left");
	$("#heartOne").attr("class","smaller");
	$("#heartOne").css("float","right");
	$("#heartTwo").attr("class","smaller");
	$("#heartTwo").css("float","left");
	$("#heartThree").attr("class","smaller");
	$("#heartThree").css("float","right");
	$("#heartFour").attr("class","smaller");
	$("#heartFour").css("float","left");
	$("#heartFive").attr("class","smaller");
	$("#heartFive").css("float","right");

	$("#heart").fadeIn(1000);
	$("#heartOne").fadeIn(2000);
	$("#heartTwo").fadeIn(3000);
	$("#heartThree").fadeIn(4000);
	$("#heartFour").fadeIn(6000); 
	$("#heartFive").fadeIn(5000); //no matter what this img loads in slower than the rest. No idea why, because it's '.JPG'?
	$("#six").fadeIn(7000);
	$("#seven").fadeIn(10000);
});

$(document).ready(function(){
    $("img").hover(function() {
        $(this).addClass('larger');

    }, function() {
        $(this).removeClass('larger');
    });
});
$("img").on("touchstart",function(e){
	"use strict";
	var pic = $(this);
	if(pic.hasClass("larger")){
		pic.removeClass("larger");
	} else{
		pic.addClass("larger");
	}
});