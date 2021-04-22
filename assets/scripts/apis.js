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
  const $ = (e) => document.querySelectorAll(e);
  const elems = $(".un_grid");

  addClass(elems);
  function addClass(elems = []) {
    // console.log(elems);
    if (window.screen.availWidth <= 334) {
      elems.forEach((elem) => {
        elem.style.removeProperty("display", "grid");
        elem.style.setProperty("display", "block");
        if (elem.classList.contains("cards")) {
          elem.querySelectorAll(".card").forEach((e) => {
            e.style.setProperty("margin-top", "15px");
            e.style.setProperty("flex-direction", "column");
          });
        }
      });
    } else {
      elems.forEach((elem) => {
        elem.style.setProperty("display", "grid");
        elem.style.removeProperty("display");
        if (elem.classList.contains("cards")) {
          elem.querySelectorAll(".card").forEach((e) => {
            e.style.removeProperty("flex-direction");
          });
        }
      });
    }
  }
  window.onresize = function () {
    addClass(elems);
  };
};

window.DefinePage.ChangeFonts = function () {
  const fonts = ["ArchsDaughter", "Teko", "Lobster"];
  const e = document.querySelector(".header .nav__menu-logo a");
  let count = 0;
  setInterval(() => {
    count++;
    count > fonts.length ? (count = 0) : count;
    e.style.fontFamily = fonts[count];
    e.animate([
      {
        opacity: 0.9,
      },
      {
        opacity: 1,
      },
    ]);
  }, 5000);
};
window["addEventListener"]("DOMContentLoaded", () => {
  return (
    window.DefinePage.Msg(),
    window.DefinePage.addClass(),
    window.DefinePage.ChangeFonts()
  );
});
