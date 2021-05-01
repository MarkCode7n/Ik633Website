import Data from "./main.objects.js";
import "./define.js";
window.DefinePage.log = function () {
  // console.log(Data.barner_elem.home);
};

const SetBarner = function () {
  const slides = Data.barner_obj,
    elems = Data.b_e,
    prevBtn = elems.prevB,
    nextBtn = elems.nextB,
    container = elems.SC;

  slides.length == 1
    ? ((prev_Btn.style.display = "none"), (next_Btn.style.display = "none"))
    : function () {
        return;
      };

  let slideCopy = [...slides];
  if (slides.length === 2) slideCopy = [...slides, ...slides];

  (function merge() {
    container.innerHTML = slideCopy
      .map((slide, slideStartIndex) => {
        const {
          image_path,
          hero_text,
          hero_h2,
          button_link,
          button_text,
        } = slide;
        let pos = "next";
        switch (slideStartIndex) {
          case 0:
            pos = "active";
            break;
          case slideCopy.length - 1:
            pos = "last";
            break;
          default:
            pos = "next";
            break;
        }
        if (slides.length <= 1) pos = "active";

        return `
      <div class="brief ${pos}">
          <div class="bg_C">
            <img
              src="${image_path}"
              alt="background_image"
            />
          </div>
          <div class="Dom_C">
            <h1>${hero_text}</h1>
            <h4>${hero_h2}</h4>
            <div class="go_Btn if__active">
              <a href="${button_link}" class="go_link">${button_text}</a>
            </div>
          </div>
        </div>`;
      })
      .join("");
  })();

  function startSlide(T) {
    const active = document.querySelector(".active"),
      prev = document.querySelector(".last");
    let next = active.nextElementSibling;

    if (!next) next = container.firstElementChild;

    active.classList.remove(["active"]);
    next.classList.remove(["next"]);
    prev.classList.remove(["last"]);

    if (T == "prev") {
      active.classList.add("next"),
        prev.classList.add("active"),
        (next = prev.previousElementSibling);
      if (!next) next = container.lastElementChild;
      next.classList.remove(["next"]), next.classList.add("last");
      return;
    }
    prev.classList.add("next");
    active.classList.add("last");
    next.classList.add("active");
  }
  nextBtn.addEventListener(
    "click",
    () => {
      startSlide();
      container
        .querySelectorAll(".brief .bg_C") //
        .forEach((bgc) => {
          animate(bgc);
        });
    },
    false
  );
  prevBtn.addEventListener(
    "click",
    () => {
      startSlide("prev");
      container
        .querySelectorAll(".brief .bg_C") //
        .forEach((bgc) => {
          animate(bgc);
        });
    },
    false
  );
  const animate = (e) => {
    e.animate(
      [
        {
          transform: "scale(1.3)",
        },
        {
          transform: "scale(1)",
        },
      ],
      { duration: 500, fill: "forwards" }
    );
  };
};
// window.addEventListener("DOMContentLoaded", function () {
SetBarner();
// });
