import "./define.js";
window.DefinePage.Msg = function () {
  window.onscroll = function () {
    const scroll_height = window.pageYOffset;
    const socials = document.querySelectorAll("#social");
    const footer_height = document
      .querySelector("footer .fair__well")
      .getBoundingClientRect().top;
    socials.forEach((ss) => {
      // console.log(scroll_height);
      // console.log(footer_height);
      if (scroll_height > 500) {
        ss.classList.add("slided");
        if (scroll_height > footer_height + 2e3) {
          ss.classList.remove("slided");
        }
      } else {
        ss.classList.remove("slided");
      }
    });
  };
};

window.DefinePage.addClass = function () {
  const $ = (e) => document.querySelector(e);
  let elems = [
    $("footer .footer__content"),
    // $(".blogs__container .wrapper"),
    // $(".services__cards-container .cards"),
  ];

  addClass(elems);
  function addClass(elems = []) {
    if (window.screen.availWidth <= 334) {
      elems.forEach((elem) => {
        elem.style.removeProperty("display", "grid");
        elem.style.setProperty("display", "block");
      });
      // elems[2].querySelectorAll(".card").forEach((e) => {
      //   e.style.setProperty("margin-top", "15px");
      // });
    } else {
      elems.forEach((elem) => {
        elem.style.setProperty("display", "grid");
        elem.style.removeProperty("display", "block");
      });
      elems[2].querySelectorAll(".card").forEach((e) => {
        e.style.setProperty("margin-top", "auto");
      });
    }
  }
  window.onresize = function () {
    addClass(elems);
  };
};
window["addEventListener"]("DOMContentLoaded", () => {
  return window.DefinePage.Msg(), window.DefinePage.addClass();
});
