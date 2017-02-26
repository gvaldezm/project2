$(function() {
  $(".clearcl").hide();
  $("button").click(function(event){
  var ageInput=parseInt($("input#age").val());
  var nameInput=$("input#name").val();
  var movieTypeInput=$("input:radio[name=movieType]:checked").val();
  console.log (ageInput);
  console.log (nameInput);
  console.log (movieTypeInput);
  alert("Hi " + nameInput + " we'll show you some " + movieTypeInput + " movies for you")
$(".clearcl").hide();
  if (movieTypeInput==="comedies"){
    $(".moviescomedies").show();
  }
    else if (movieTypeInput==="Sci-fi"){
      $(".moviesSci-fi").show();
    }
    else if (movieTypeInput==="Horror"){
      $(".moviesHorrir").show();
    }
    else if (movieTypeInput==="Animated"){
      $(".moviesAnimated").show();
    }
    else {
      $(".moviesOther").show();
    }
    event.preventDefault();
  });
});
