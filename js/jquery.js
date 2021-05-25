$(function(){
  $(".menu").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
  });
  $(".menu").mouseout(function(){
    $(".submenu").stop().slideUp();
  });
});
