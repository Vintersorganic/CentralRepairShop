$(document).ready(function() {


      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
      
           
          if (scroll >= 60) {
              
              $(".navbar").addClass("bg-dark");
          } else {
            $(".navbar").removeClass("bg-dark");
          }
      });
      });