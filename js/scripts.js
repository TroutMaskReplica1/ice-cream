$(document).ready(function() {

   // $("#display").append("<h2>" + list[i] + "</h2>");
  }
  $("list").submit(function(event) {
    var list = ("input#list");
    var splitlist = list.split(" ");
    var sortlist = splitlist.sort();
    for(var i=0; i<list.length; i++) {
  });
  $("#food").submit(function(event) {
    list.push($("#food-in").val());
    $("#display").append("<h2>" + $('#food-in').val() + "</h2>");
    event.preventDefault();
  });
});

splitlist.sort($("#food-list").val());
