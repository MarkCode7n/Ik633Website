import "./define.js";
window.DefinePage.Loader = function () {
  window.onload = () => {
    setTimeout(() => {
      document.getElementById("loader").classList["add"]("loaded");
    }, 3000);
  };
};

window["addEventListener"]("DOMContentLoaded", () => {
  return window.DefinePage.Loader();
});
