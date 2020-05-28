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

// hostel booking functionality
function bookHostel (name,type,people) {
  this.name = name;
  this.type = type;
  this.people = people;
}

bookHostel.prototype.fullbookHostel = function () {
  return this.name + " " + this.type + " and " + this.people;
};

function amount(price) {
  this.price = price;

}

amount.prototype.finalamount = function () {
  return this.price;
};

var typePrice = [20000, 15000, 10000]
var orderList=[];

$(document).ready(function () {
  $('form#my-Form').submit(function (event) {
      event.preventDefault();
      var hostelNAme = $("#type").val();

      var hostelSize = $('#size').val();
      var peopleinHostel=$("#people").val();
  

      var price = typePrice[hostelSize - 1];
       
      newbookHostel = new bookHostel(hostelNAme, hostelSize, peopleinHostel);
      newamount = new amount(price);
      var order={
        name:hostelNAme,
        size:hostelSize,
        people:peopleinHostel
      }

      $("#test").html("You have booked " + order.name + "Room size:" + order.size + "with a capacity of " + order.people + "people"); 

      $("#total").html(price);

    });

  })
    