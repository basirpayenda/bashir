$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

$("a[href*='#']").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    700
  );
});

const burger_menu = document.querySelector(".burger-menu");
const burger = document.querySelector(".burger-menu__bar");
const nav = document.querySelector("nav");
const nav_items = document.querySelectorAll(".nav__item");
burger_menu.addEventListener("click", toggleMenu);

let showMenu = false;

function toggleMenu() {
  console.log("clicked");
  if (!showMenu) {
    burger_menu.style.backgroundColor = "transparent";
    burger.classList.add("open");
    nav.classList.add("open");
    nav_items.forEach(item => item.classList.add("open"));

    showMenu = true;
  } else {
    burger_menu.style.backgroundColor = " rgba(0, 0, 0, 0.7)";
    burger.classList.remove("open");
    nav.classList.remove("open");
    nav_items.forEach(item => item.classList.remove("open"));

    showMenu = false;
  }
}

window.onscroll = function() {
  scrollFunction();
  showonTopBtn();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("#nav").classList.add("style-on-scroll");
  } else {
    document.querySelector("#nav").classList.remove("style-on-scroll");
  }
}

function showonTopBtn() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.querySelector("#toTopBtn").style.display = "block";
    document.querySelector("#arrowDown").style.display = "none";
  } else {
    document.querySelector("#toTopBtn").style.display = "none";
    document.querySelector("#arrowDown").style.display = "block";
  }
}

/* Gallery Scripts */
$(document).ready(function() {
  $("#gallery").lightGallery({
    selector: ".item"
  });
});

// typed

/* for gallery */
var typed = new Typed(".title", {
  // Waits 1000ms after typing "First"
  strings: ["My Photos"],
  typeSpeed: 75,
  backSpeed: 20,
  startDelay: 600
});
/* for contact */
var typed2 = new Typed(".c-title", {
  // Waits 1000ms after typing "First"
  strings: ["Send me a message:"],
  typeSpeed: 75,
  backSpeed: 20,
  startDelay: 600
});

/* show more, show less functionality */
function showMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("moreLessBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
