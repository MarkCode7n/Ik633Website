import "./define.js";

window.DefinePage.SetNav = function () {
  const navControl = document.getElementById("navControl");
  const navUl = document.getElementById("navUl");
  let isPressed = false;
  navControl.addEventListener("click", function () {
    if (!isPressed) {
      navControl.classList.add("clicked");
      navUl.classList.add("ready");
      isPressed = true;
    } else {
      navControl.classList.remove("clicked");
      navUl.classList.remove("ready");
      isPressed = false;
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  return window.DefinePage.SetNav();
});
