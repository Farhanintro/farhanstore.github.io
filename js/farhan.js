// js for sidenav 
var menubtn = document.getElementById("menubtn")
var sidenav = document.getElementById("sidenav")

sidenav.style.right = "-250px";
menubtn.onclick = function () {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
    } else {
        sidenav.style.right = "-250px"
    }
}


// slider section external js
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });