$(function () {

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
    $(".menu-toggle").on('click', function (event) {
        nav.addClass("open");
    });

    // Close menu
    $("main").on('click', function (event) {
        nav.removeClass("open");
    });

    /* #####
      Info Container
    */
    allInfoContainers = $(".info-box-container");

    allInfoContainers.on('click', function (event) {
        allInfoContainers.removeClass("open");
        $(this).addClass("open");
    });

    /* #####
      Tag-line-slider
    */
    $(".tag-line").hide();

    function tagLineSlider() {

        var duration = 750;
        var curr = 2;
        var count = $(".tag-line-slider-object").length;

        $(".tag-line-slider-object:nth-child(1)").show("slide", { direction: "left" }, duration);

        setInterval(function () {

            $(".tag-line-slider-object").hide("slide", { direction: "left" }, duration);

            $(".tag-line-slider-object:nth-child(" + curr + ")").delay(750).show("slide", { direction: "left" }, duration);

            curr++;

            if (curr == count + 1) {
                curr = 1;
            }
        }, 3000);
    }

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
        Waypoints
    */

    $(".grid-container").css({ "opacity": "0" });

    $("#about").waypoint(function (direction) {
        $("#about .grid-container").css({ "opacity": "1" });
    }, {
            offset: '75%'
        })

    $("#references").waypoint(function (direction) {
        $("#references .grid-container").css({ "opacity": "1" });
    }, {
            offset: '75%'
        })

    $("#contact").waypoint(function (direction) {
        $("#contact .grid-container").css({ "opacity": "1" });
    }, {
            offset: '75%'
        })

    /* #####
        Fade In Content
    */
    $(".text-container").hide();
});

$(window).load(function () {

    /* #####
        Fade In Content
    */
    setInterval(function () {
        $(".text-container").fadeIn();
    }, 500);

});


