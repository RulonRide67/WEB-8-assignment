$(document).ready(function() {
    console.log("Hotel Booking JS ready");

    $("#welcomeText").hide().fadeIn(1500);

    let currentIndex = 0;
    let images = $(".room-img");

    images.hide();
    images.eq(0).show();

    $("#nextRoom").click(function() {
        images.eq(currentIndex).fadeOut(600, function() {
            currentIndex = (currentIndex + 1) % images.length;
            images.eq(currentIndex).fadeIn(600);
        });
    });

    $("#prevRoom").click(function() {
        images.eq(currentIndex).fadeOut(600, function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images.eq(currentIndex).fadeIn(600);
        });
    });

    $(".toggleDescBtn").click(function() {
        $(this).closest(".room-card").find(".room-desc").slideToggle();
    });
    
    $(".bookBtn").click(function() {
        $(this).text("Booked!").css({
            backgroundColor: "#198754",
            borderColor: "#198754"
        });
    });
    console.log("jQuery filter ready");
  $(".room-card").show();


  $("#filterAll").click(function() {
    $(".room-card").each(function() {
      $(this).stop(true, true).fadeIn(300);
    });
  });

  $("#filterDeluxe").click(function() {
    $(".room-card").each(function() {
      if ($(this).hasClass("deluxe")) {
        $(this).stop(true, true).fadeIn(300);
      } else {
        $(this).stop(true, true).fadeOut(300);
      }
    });
  });

  $("#filterStandard").click(function() {
    $(".room-card").each(function() {
      if ($(this).hasClass("standard")) {
        $(this).stop(true, true).fadeIn(300);
      } else {
        $(this).stop(true, true).fadeOut(300);
      }
    });
  });
});

