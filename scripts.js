$(document).ready(function () {

    function loadItem(id) {
        $("#v-news-center-picture-image").attr("src", "Pictures/elementPicture"+id+".png").stop(true, true).hide().fadeIn();
        $("#v-news-right-column-text").load("text.html #v-text-item-"+id).stop(true, true).hide().fadeIn(800, function () {
            $("#v-news-right-column").mCustomScrollbar("update");
        });
    };

    function vAnimatePicture(pictureID) {
        var img = $(pictureID);
        var distanceMultiplier = 10;


        var x = Math.floor(Math.random() * 640);
        var maxX = Math.floor(Math.random() * 640) - x;
        if (x > 640) x = 640;
        if (x < 0) x = 0;
        if (maxX > 640) maxX = 640;
        if (maxX < 0) maxX = 0;

        var distance = Math.abs(maxX - x);
        // console.log(maxX - x);
        //if (Math.abs(maxX - x) < 100) maxX = 100;


        //if ()
        var animationTime = 640 * distanceMultiplier * 1.5 - distance * distanceMultiplier; // Math.floor(Math.random() * 9000) + 2500;

        if (distance < 50) animationTime = 0;
        //console.log(distance + " -- " + animationTime);
        //var logstr = "animationTime" + pictureID + " " + animationTime;
        //console.log(logstr);
        var alpha = 0.6; // (Math.random() * 40 + 10) / 100;

        img.css("left", x);
        img.css("opacity", alpha);
        img.css("visibility", "visible");
        img.fadeIn(1000, function () {
            img.animate({ left: maxX }, animationTime, function () {
                img.fadeOut(1000);
            });
        });

        setTimeout(function () {
            vAnimatePicture(pictureID);
        }, animationTime + 3050);
    }

    // start animating the circles
    for (var __i = 0; __i < 12; __i++) {
        vAnimatePicture("#img" + (__i + 1));

    }

    loadItem(1);

    $("#v-news-right-column").mCustomScrollbar({
        advanced: {
            updateOnContentResize: true
        }
    });

    $(".v-news-items").hover(function () {
        $(this).children(".v-news-items-name").stop().animate({ color: " #E63E4D" }, 500);
    }, function () {
        $(this).children(".v-news-items-name").stop().animate({ color: "#6c6c6c" }, 800);
    });

    $(".v-news-items").click(function() {
        var newsId = $(this).attr("data-text-id");
        loadItem(newsId);
    });

    $('ul.tabs').each(function () {
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');

        // Use the first link as the initial active tab
        $active = $links.first().addClass('active');
        $content = $($active.attr('href'));

        // Hide the remaining content
        $links.not(':first').each(function () {
            $($(this).attr('href')).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function (e) {
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $($(this).attr('href'));

            // Make the tab active.
            $active.addClass('active');
            $content.fadeIn();

            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
});
