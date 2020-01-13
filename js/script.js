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