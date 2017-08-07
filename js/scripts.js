/* #####
  Smooth Scroll
*/
function ActiveSmoothScroll() {

  $("a").on('click', function(event) {
    if (this.hash !== "") {

      $("nav").removeClass("open");

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
}



/* #####
  Menu
*/
function ActiveMenu() {


  var nav = $("nav");

  // Open menu
  $(".menu-toggle").on('click', function(event) {
    nav.addClass("open");
  });

  // Close menu
  $("main").on('click', function(event) {
    nav.removeClass("open");
  });
}

/* #####
  Info Container
*/
function infoContainers() {
  allInfoContainers = $(".info-box-container");

  allInfoContainers.on('click', function(event) {
    allInfoContainers.removeClass("open");
    $(this).addClass("open");
  });
}


/* #####
  Tag-line-slider
*/


function tagLineSlider() {

  var duration = 750;
  var curr = 2;
  var count = $(".tag-line-slider-object").length;

  $(".tag-line-slider-object:nth-child(1)").show("slide", {
    direction: "left"
  }, duration);

  setInterval(function() {

    $(".tag-line-slider-object").hide("slide", {
      direction: "left"
    }, duration);

    $(".tag-line-slider-object:nth-child(" + curr + ")").delay(750).show("slide", {
      direction: "left"
    }, duration);

    curr++;

    if (curr == count + 1) {
      curr = 1;
    }
  }, 3000);
}




/* #####
    Waypoints
*/
function startWaypoints(){  

  $(".grid-container").css({
    "opacity": "0"
  });

  $("#about").waypoint(function(direction) {
    $("#about .grid-container").css({
      "opacity": "1"
    });
  }, {
    offset: '75%'
  })

  $("#references").waypoint(function(direction) {
    $("#references .grid-container").css({
      "opacity": "1"
    });
  }, {
    offset: '75%'
  })

  $("#contact").waypoint(function(direction) {
    $("#contact .grid-container").css({
      "opacity": "1"
    });
  }, {
    offset: '75%'
  })
}

/* #####
  Validate Form Data
*/

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  

function liveValidateForm(){
  
  var emailOk = false;
  var msgOk = false;
  
 
  function isEverythingOk(){
    if(emailOk && msgOk){
      $("#submitForm").removeClass("disable");
    } else{
       $("#submitForm").addClass("disable");
    }
  }
  
  $("input#email").keyup(function(e){
    
    if(validateEmail($(this).val())){
       $(this).parent().removeClass("input-non-valid").addClass("input-valid");
       emailOk = true;
    } else {
        $(this).parent().removeClass("input-valid").addClass("input-non-valid");
        emailOK = false;
    }
    
    isEverythingOk();
    
  });
  
   $("#message").keyup(function(e){
    
     
     if($(this).val().length > 9){
       msgOk = true;
     } else {
       msgOk = false;
     }
     
     isEverythingOk();
     
  });
}

/* #####
  Submit Form Data
*/
function submitFormData() {
  var email = $("#email").val();
  var msg = $("#message").val();
  var allOk = true;
  
  $(".error-msg").hide();
  
  // Validation 
  if(!validateEmail(email)){
    $("#email-error").fadeIn();
    allOk = false;
  }
  
  if(msg.length < 10){
    $("#msg-error").fadeIn();
    allOk = false;
  }
  
  if(allOk){
     $.ajax({
        url: "https://formspree.io/jonasolaussen@gmail.com",
        method: "POST",
        data: {email: email, message: msg},
        dataType: "json"
    });
    
    $("#submitForm").val("Skickar...");
    
    setTimeout(function(){
      $("#submitForm").val("Skickat!");
      $("#submitForm").addClass("sent");
    }, 2000);
  }
  

}

/* #####
  Start Functions
*/
$(function() {
  ActiveSmoothScroll();
  ActiveMenu();
  infoContainers();
  startWaypoints();
  liveValidateForm();
  
  $(".tag-line").hide();
  tagLineSlider();

  /* #####
    Start Stellar
*/
  $(window).stellar({
    horizontalScrolling: false,
    verticalOffset: 0,
    horizontalOffset: 0,

  });
  
  /* #####
    Fade In Content
*/
$(".text-container").hide();

  $("#submitForm").on('click', function() {
    submitFormData();

  });

});

$(window).load(function() {

  /* #####
      Fade In Content
  */
  setInterval(function() {
    $(".text-container").fadeIn();
  }, 500);

});