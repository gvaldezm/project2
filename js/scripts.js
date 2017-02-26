$(function() {
  $(".clearcl").hide();
  $("button").click(function(event){
  var ageInput=parseInt($("input#age").val());
  var nameInput=$("input#name").val();
  var movieTypeInput=$("input:radio[name=movieType]:checked").val();
  console.log (ageInput);
  console.log (nameInput);
  console.log (movieTypeInput);
  alert("Hi " + nameInput + " we'll show you some movies for you")
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
