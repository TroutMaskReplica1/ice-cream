$(document).ready(function() {
  var icecream = ["chocolate","vanilla","pistachio","strawberry","rocky road"]
  for(var i=0; i<icecream.length; i++) {
    $("#display").append("<h2>" + icecream[i] + "</h2>");
  }
  $("#icecream").submit(function(event) {
    event.preventDefault();
    $("#display").append("<h2>" + $('#ice-cream').val() + "</h2>");
  });
});
