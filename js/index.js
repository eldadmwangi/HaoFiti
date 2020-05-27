$(document).ready(function(){
  // Activate Carousel
  $("#carouselExampleFade").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#carouselExampleFade").carousel(0);
  });
  $(".item2").click(function(){
    $("#carouselExampleFade").carousel(1);
  });
  $(".item3").click(function(){
    $("#carouselExampleFade").carousel(2);
  });
  $(".item4").click(function(){
    $("#carouselExampleFade").carousel(3);
  });
    
  // Enable Carousel Controls
  $(".left").click(function(){
    $("#carouselExampleFade").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselExampleFade").carousel("next");
  });
});