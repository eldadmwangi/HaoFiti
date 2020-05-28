// hostel booking functionality
function bookHostel (name,phone,type,people) {
  this.name = name;
  this.phone = phone;
  this.type = type;
  this.size =size;
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

  

  $('#submitButton').click(function (event) {
      event.preventDefault();
        var email = $("#emailInput").val();
        
        var phone = $("#phone").val();
        

   
      var personName = $("#fullname").val();

      var hostelNAme = $("#type option:selected").val();

      var hostelSize = $('#size option:selected').val();
      
      var peopleinHostel=$("#people option:selected").val();
      

      switch(hostelSize){
        case "3 Bedroom" :
          price = 20,000;
          break;
      
      case "2 Bedroom":
        price= 15,000;
        break;

        case "1 Bedroom":
          price = 10,000
      }


      var price = typePrice[hostelSize - 1];

      $("#name").html($("#fullname").val());
      
      $("#phoneNo").html( $("#phone").val());
      $("#hostelName").html($("#type option:selected").val());
      $("#hostelSize").html($("#size option:selected").val());
      $("#sharing").html($("#people option:selected").val());
      
      
       
      var newbookHostel = new bookHostel(personName,phone,hostelNAme, hostelSize, peopleinHostel);

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
      $("table#roomOrders").append('<tr><td id="name"'+newbookHostel.name+'</td><td id="phoneNo">' + newbookHostel.phone + '</td><td id="hostelName">'+newbookHostel.type + '</td><td id="hostelSize">'+newbookHostel.size+'</td><td id=" sharing"'+newbookHostel.people+'</td></tr>')

      

      $(".message").html(personName+" you are required to pay Ksh." + price + " before you reporting date.Show your receipt in order to access your room.");
      }
    });

  });
    