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

$(document).ready(function() {
  $(".view-details").click(function() {
    const cardBody = $(this).closest(".card-body");
    let details = cardBody.find(".extra-details");

    if (details.length === 0) {
      const desc = $(this).data("desc");
      const title = $(this).data("title");

      const longDesc = `
        ${desc} This room offers premium comfort and modern amenities, including free Wi-Fi, air conditioning, and a private bathroom. 
        Guests can also enjoy 24-hour room service and complimentary access to the hotel's fitness center. 
        Perfect choice for travelers looking for both relaxation and convenience.
      `;

      const extraHTML = `
        <div class="extra-details mt-3 border-top pt-3" style="display:none;">
          <p class="small">${longDesc}</p>
        </div>
      `;

      cardBody.append(extraHTML);
      details = cardBody.find(".extra-details");
    }

    if (details.is(":visible")) {
      details.slideUp(300);
      $(this).text("Details");
    } else {
      details.slideDown(300);
      $(this).text("Hide");
    }
  });
});

$(document).ready(function() {
  $("#contactForm").on("submit", function(e) {
    e.preventDefault(); 

    if (this.checkValidity()) {
      $("#formSuccess").fadeIn(400).delay(3000).fadeOut(400);
      $(this).trigger("reset"); 
      this.classList.remove("was-validated"); 
    } else {
      this.classList.add("was-validated"); 
    }
  });
});

$(document).ready(function() {
  $("#bookingForm").on("submit", function(e) {
    e.preventDefault();

    if (this.checkValidity()) {
      $("#bookingResult").fadeIn(400).delay(3000).fadeOut(400);
      $(this).trigger("reset");
      this.classList.remove("was-validated");
    } else {
      this.classList.add("was-validated");
    }
  });
});
