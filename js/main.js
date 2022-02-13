$(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 87) {
      $(".header").addClass("header-fixed");
    } else {
      $(".header").removeClass("header-fixed");
    }
  });

  $(function () {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
  });

  $(document).ready(function () {
    $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate(
        {
          scrollTop: top,
        },
        1000
      );
    });
  });

  $(".menu__list-link").on("click", function (e) {
    e.preventDefault;
    $(".menu__list-link").removeClass("menu__list-link--active");
    $(this).addClass("menu__list-link--active");

    $(".menu__list").removeClass("active");
    $(".burger-menu").removeClass("active");
  });

  $(".lang-item").on("click", function (e) {
    e.preventDefault;
    $(".lang-item").removeClass("lang--active");
    $(this).addClass("lang--active");
  });

  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu__list");

  burger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  }
});
