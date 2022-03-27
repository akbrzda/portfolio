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
      $("body,html").animate({
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
    $("body").removeClass("hidden");

  });

  $(".lang-item").on("click", function (e) {
    e.preventDefault;
    $(".lang-item").removeClass("lang--active");
    $(this).addClass("lang--active");
  });

  $(".contacts__send-message").on("click", function (e) {
    e.preventDefault;
    $(".modal").addClass("modal--active");
    $("body").addClass("hidden");
  });
  $(".close-modal").on("click", function (e) {
    e.preventDefault;
    $(".modal").removeClass("modal--active");
    $("body").removeClass("hidden");
  });

  const burger = document.querySelector(".burger-menu");
  const menu = document.querySelector(".menu__list");
  const body = document.querySelector(".scroll");

  burger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("hidden");
  }
});
window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 1000);
};

function tabs(event, tabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("portfolio__list");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("portfolio__tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" portfolio__list--active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.className += " portfolio__list--active";
}