$(document).ready(function(){
   "use strick";
   $("html").niceScroll();
$('.carousel').carousel({
	interval:5000
});

$(".gear-check").click(function(){
  $(".color-option").fadeToggle();
});

var ColorLi = $(".color-option ul li");

ColorLi
.eq(0).css("backgroundColor","#E41B17").end()
.eq(1).css("backgroundColor","#E426D5").end()
.eq(2).css("backgroundColor","#009AFf").end()
.eq(3).css("backgroundColor","#FFD500");

ColorLi.click(function()
  {
   $("link[href*='theme']").attr("href",$(this).attr("data-value"));
   });
   
   var scrollButton = $("#scroll-top");
   $(window).scroll(function(){
    //console.log($(this).scrollTop()); 
    if ($(this).scrollTop()>=700) {
     scrollButton.show();
    }
    else{
    	scrollButton.hide();
    }
    });
   scrollButton.click(function(){
       $("html,body").animate({scrollTop : 0},600);
     });
});


// loading Screen 
$(window).load(function()
{
    $("body").css("overflow","auto");
    $(".loading-overlay .spinner").fadeOut(2000,function(){
  	$(this).parent().fadeOut(2000,function(){
  		
  		$(this).remove();
  	});
  });
// End the loading screen

});