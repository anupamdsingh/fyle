$(document).ready(function () {
  $("#custom-carousel").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Adding hover effect to show overlay
  $(".carousel-slide").hover(
    function () {
      $(this).find(".overlay").show();
    },
    function () {
      $(this).find(".overlay").hide();
    }
  );
});

const stats = document.querySelectorAll(".stat");

stats.forEach((stat) => {
  stat.addEventListener("mouseenter", () => {
    stat.classList.add("hovered"); // Add a class for CSS hover styles
  });

  stat.addEventListener("mouseleave", () => {
    stat.classList.remove("hovered");
  });
});

$(document).ready(function () {
  $("#contact-us-btn").on("click", function () {
    $("#contactModal").modal("show");
  });
});
