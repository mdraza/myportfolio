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
})