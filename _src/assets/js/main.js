$(document).ready(function () {

var backgroundImages = ['url(assets/images/teamclass.jpg)','url(assets/images/teamwork.jpg)'];

function back(element){
  return  $("#hero").css({
    'background-image': "element"
  });
 
};



  $("#hero").click(function(elementos) {
    back(elementos);

  })


});
