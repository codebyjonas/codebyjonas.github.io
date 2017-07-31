$(document).ready(function () {
    
  /* #####
    Smooth Scroll
  */
  $("a").on('click', function (event) {
      if (this.hash !== "") {
          
          $("nav").removeClass("open");
        
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top 
          }, 800, function () {
              window.location.hash = hash;
          });
      } 
  });

  
  
  /* #####
    Menu
  */
  
  nav = $("nav");
  
  // Open menu
  $(".menu-toggle").on('click', function (event){
      nav.addClass("open");
  });
  
  // Close menu
  $("main").on('click', function (event){
      nav.removeClass("open");
  });
  
  /* #####
    Info Container
  */
  allInfoContainers = $(".info-box-container");
  
  allInfoContainers.on('click', function(event){
     allInfoContainers.removeClass("open");
     $(this).addClass("open");
  });
  
  /* #####
    Tag-line-slider
  */
  $(".tag-line").hide();
  
  $(".tag-line-slider-object").each(function(index,element) {
    console.log(index);
    

      $(".tag-line-slider-object").hide('slide',{direction:'left'},1000).delay(500);
     
      $(this).show('slide', {direction: 'right'}, 1000).delay(3000);
    
  });
  
  
    

});