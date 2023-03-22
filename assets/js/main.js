(function () {
  "use strict";
  window.onload = function () {
    window.setTimeout(fadeout, 200);
  };
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
    } else {
      header_navbar.classList.remove("sticky");
    }
  };
  let navbarToggler = document.querySelector(".navbar-toggler");
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
  });
  tns({
    container: ".client-logo-carousel",
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    gutter: 15,
    nav: false,
    controls: false,
    responsive: {
      0: { items: 1 },
      540: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
    },
  });
  var wow = new WOW({ mobile: false });
  wow.init();
  var cu = new counterUp({
    start: 0,
    duration: 2000,
    intvalues: true,
    interval: 100,
    append: " ",
  });
  cu.start();
  var elements = document.getElementsByClassName("portfolio-btn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      var el = elements[0];
      while (el) {
        if (el.tagName === "BUTTON") {
          el.classList.remove("active");
        }
        el = el.nextSibling;
      }
      this.classList.add("active");
    };
  }
})();
window.onscroll = function () {
  var header_navbar = document.querySelector(".navbar-area");
  var sticky = header_navbar.offsetTop;
  if (window.pageYOffset > sticky) {
    header_navbar.classList.add("sticky");
  } else {
    header_navbar.classList.remove("sticky");
  }
  var backToTo = document.querySelector(".scroll-top");
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    backToTo.style.display = "block";
  } else {
    backToTo.style.display = "none";
  }
};
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
document.querySelector(".scroll-top").onclick = function () {
  scrollTo(document.documentElement);
};
