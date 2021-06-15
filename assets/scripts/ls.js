import "./define.js";

window.DefinePage.setLS = function () {
  let dark_mode = localStorage.getItem("dark_mode");
  const btn_div = document.getElementById("toggleMode");
  const btn = btn_div.querySelector("button");
  const img = btn.querySelector("img");
  const bc = document.body.classList;

  const saveDarkMode_ls = () => {
    dark_mode = localStorage.getItem("dark_mode");
    bc.remove("default");
    bc.add("Dark_Mode");
    img.classList.add("invert__this");
    localStorage.setItem("dark_mode", "enabled");
  };
  const deleteDarkMode_ls = () => {
    dark_mode = localStorage.getItem("dark_mode");
    bc.remove("Dark_Mode");
    bc.add("default");
    img.classList.remove("invert__this");
    localStorage.removeItem("dark_mode", null);
  };
  if (dark_mode !== "enabled") deleteDarkMode_ls();
  btn.addEventListener("click", () => {
    dark_mode = localStorage.getItem("dark_mode");
    dark_mode !== "enabled" ? saveDarkMode_ls() : deleteDarkMode_ls();
  });
};

window.addEventListener("DOMContentLoaded", () => {
  return window.DefinePage.setLS();
});
