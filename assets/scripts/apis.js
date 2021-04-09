import "./define.js";
window.DefinePage.Msg = function () {
  window.onscroll = function () {
    const scroll_height = window.pageYOffset;
    const socials = document.querySelectorAll("#social");
    socials.forEach((ss) => {
      if (scroll_height > 500) {
        ss.classList.add("slided");
      } else {
        ss.classList.remove("slided");
      }
    });
  };
};

window["addEventListener"]("DOMContentLoaded", () => {
  return window.DefinePage.Msg();
});
