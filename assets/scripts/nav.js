import "./define.js";

window.DefinePage.SetNav = function () {
  const navControl = document.getElementById("navControl");
  const navUl = document.getElementById("navUl");
  let isPressed = false;
  function cont() {
    navControl.addEventListener("click", function () {
      if (!isPressed) {
        navControl.classList.add("clicked");
        navUl.classList.add("ready");
        document.body.style.overflow = "initial";
        isPressed = true;
      } else {
        navControl.classList.remove("clicked");
        navUl.classList.remove("ready");
        document.body.style.overflow = "none";
        isPressed = false;
      }
    });
  }
  cont();
  // if (cont) {
  //   document.body.addEventListener("click", function () {
  //     if (this.target !== navUl) {
  //       navControl.classList.remove("clicked");
  //       navUl.classList.remove("ready");
  //       isPressed = false;
  //     } else {
  //       navControl.classList.add("clicked");
  //       navUl.classList.add("ready");
  //       isPressed = false;
  //     }
  //   });
  // }
};

window.addEventListener("DOMContentLoaded", () => {
  return window.DefinePage.SetNav();
});
