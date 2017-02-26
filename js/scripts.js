$(function() {
  $("button").click(function(event){
  var ageInput=parseInt($("input#age").val());
  var nameInput=$("input#name").val();
  console.log (ageInput);
  console.log (nameInput);
  alert("Hi " + nameInput + " we'll show you some rides for you")
$(".clearcl").hide();
  if (ageInput>=18){
    $(".moviesover").show();
  }
    else {
      $(".moviesunder").show();
    }
    event.preventDefault();
  });
});
