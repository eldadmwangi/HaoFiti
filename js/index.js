


// hostel booking functionality
function bookHostel (name,phone,type,people,total) {
  this.name = name;
  this.phone = phone;
  this.type = type;
  this.size =size;
  this.people = people;
  this.total = total;

}

function amount(price) {
  this.price = price;

}

amount.prototype.finalamount = function () {
  return this.price;
};

var typePrice = [20000, 15000, 10000]
var orderList=[];



$(document).ready(function () {

  

  $('#submitButton').click(function (event) {
      event.preventDefault();
        var email = $("#emailInput").val();
        var phone = $("#phone").val();
        var personName = $("#fullname").val();
        var hostelNAme = $("#type option:selected").val();
        var hostelSize = $('#size option:selected').val();
        var peopleinHostel=$("#people option:selected").val();
        var services= [];
         $.each($("input[name='services']:checked"),function(){
         services.push($(this).val());
            });
        

      switch(hostelSize){
        case "3 Bedroom" :
          price = 20000;
          break;
      
      case "2 Bedroom":
        price= 15000;
        break;

        case "1 Bedroom":
          price = 10000;
          break;
      }
      var priceForServices = services.length * 2000;
      totalPrice = price + priceForServices;


      

      $("#name").html($("#fullname").val());
      
      $("#phoneNo").html( $("#phone").val());
      $("#hostelName").html($("#type option:selected").val());
      $("#hostelSize").html($("#size option:selected").val());
      $("#sharing").html($("#people option:selected").val());
      $("#service").html(services.join(", "));
      
       
      var newbookHostel = new bookHostel(personName,phone,hostelNAme, hostelSize, peopleinHostel,totalPrice);

      if(email == "" || phone == ""||personName== ""){
        alert("Please fill in all blanks to book a room");
        return false;
      }
      else if (phone.length !== 10){
        alert("Please rewrite your Phone Number");
        return false
      }
      else {
      $("#total").fadeIn(2000);
      $("table#roomOrders").append('<tr><td id="name"'+newbookHostel.name+'</td><td id="phoneNo">' + newbookHostel.phone + '</td><td id="hostelName">'+newbookHostel.type + '</td><td id="hostelSize">'+newbookHostel.size+'</td><td id=" sharing"'+newbookHostel.people+  '</td><td id="services">'+newbookHostel.total +'</td></tr>')

      

      $(".message").html(personName+" you have successfully booked a room. You are required to pay Ksh. " + totalPrice + "  before your reporting date.Show your receipt in order to access your room,failure to which your room will be reallocated.After which, payment is due at the end of each month.");
      }
    });
    

  });
