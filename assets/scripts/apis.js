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

window["addEventListener"]("DOMContentLoaded", () => {
  return window.DefinePage.Msg();
});
