$(document).ready(function () {



  var images = ["url(../assets/images/team1.jpg)", "url(../assets/images/teamclass.jpg)", "url(../assets/images/teamwork.jpg)"]
  var index = 0;

  images[2]

  $(".btn-right").on("click",function(){
      index++;
      var newUrl = images[index];
      $("#hero").css("background-image",newUrl);
    });



    $(".btn-left").on("click",function(){
      index--;
      var newUrl = images[index];
      $("#hero").css("background-image",newUrl);
    });


    

  });



    

