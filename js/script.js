/**** Tooltip ****/ 
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); 
});

/****  Preloader  ****/
// $("#status").fadeOut();
$("#preloader")
  .delay(550)
  .fadeOut("slow");
$("body")
  .delay(550)
  .css({ overflow: "visible" });

  /***************************  Smooth Scroll  **********************/
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 700
      );
    }
  }
});

/****  Scroll Top  ****/
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 600) {
    $(".scroll-top").fadeIn(600);
  } else {
    $(".scroll-top").fadeOut(600);
  }
});
$(".scroll-top").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: 0
    },
    500
  );
  return false;
});