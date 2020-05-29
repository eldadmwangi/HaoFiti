function myFunction() {
    var feedback = document.getElementById("feedback").value;
    if(feedback == ""){
        alert("Please input a message to send feedback");
    }
    else{
    document.getElementById("demo").innerHTML = "Hey ,your feedback has been received.Thank you.";
    }
 }