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

        if (email == "" || phone == ""){
          alert("PLease Fill in all blanks to book a room")
        }
        else{
          return true
        }
   
      var personName = $("#fullname").val();

      var hostelNAme = $("#type").val();

      var hostelSize = $('#size').val();
      var peopleinHostel=$("#people").val();
  

      var price = typePrice[hostelSize - 1];
       
      var newbookHostel = new bookHostel(personName,phone,hostelNAme, hostelSize, peopleinHostel);
      var newamount = new amount(price);
      $("table#roomOrders").text('<tr><td id="name"'+newbookHostel.name+'</td><td id="phoneNo">' + newbookHostel.phone + '</td><td id="hostelName">'+newbookHostel.type + '</td><td id="hostelSize">'+newbookHostel.size+'</td><td id=" sharing"'+newbookHostel.people+'</td></tr>')

      

      $("#total").html(price);

    });

  });
    