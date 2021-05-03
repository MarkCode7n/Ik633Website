import barner_data from "./main.objects.js";
window.addEventListener("DOMContentLoaded", () => {
  const $ = function (id = HTMLElement) {
    return document.querySelector(id);
    // return "string" === typeof id ? document.querySelector(id) : id, id;
  };
  const _ = function (e) {
    return "string" === typeof id ? document.querySelector(e) : e;
  };

  const prevB = $("#prev__btn"),
    nextB = $("#next__btn"),
    SC = $(".Slide_C");

  barner_data.length === 1
    ? ((prevB.style.display = none), (nextB.style.display = none))
    : () => void 0;

  let curr = [...barner_data];
  barner_data.length === 2
    ? (curr = [...barner_data, ...barner_data])
    : () => void 0;

  (function () {
    SC.innerHTML = curr
      .map((slide, index) => {
        const { img_path, h1, h4, bLink, bTxt } = slide;
        let pos = "next";
        switch (index) {
          case 0:
            pos = "act";
            break;
          case curr.length - 1:
            pos = "lst";
            break;
          default:
            pos = "nxt";
            break;
        }
        barner_data.length <= 1 ? (pos = "act") : pos;

        return ` 
        <div class="brief ${pos}">
             <div class="bg_C">
                <img
                  src="${img_path}"
                  alt="background_image"
                />
              </div>
              <div class="Dom_C">
                <h1>${h1}</h1>
                <h4>${h4}</h4>
                <div class="go_Btn if__active">
                  <a href="${bLink}" class="go_link">${bTxt}</a>
                </div>
              </div>
            </div>`;
      })
      .join("");

    SC.querySelectorAll(".breif .bg_C").forEach((elem) => {
      animate(elem);
    });
  })();
  function animate(e) {
    e.animate([{ transform: "scale(1.5)" }, { transform: "scale(1)" }], {
      duration: 3000,
      fill: "forwards",
    });
  }
  function startSlide(T) {
    const active = $(".act");
    const last = $(".lst");
    let next = active.nextElementSibling;

    if (!next) next = SC.firstElementChild;

    active.classList.remove("act");
    next.classList.remove("nxt");
    last.classList.remove("lst");

    if (T == "prev") {
      active.classList.add("nxt"),
        last.classList.add("act"),
        (next = last.previousElementSibling);
      if (!next) next = SC.lastElementChild;

      next.classList.remove(["nxt"]), next.classList.add("lst");
      return;
    }

    last.classList.add("nxt");
    active.classList.add("lst");
    next.classList.add("act");
  }
  nextB.addEventListener(
    "click",
    () => {
      startSlide();
      SC.querySelectorAll(".breif .bg_C").forEach((elem) => {
        animate(elem);
      });
      console.log(elem);
    },
    false
  );
  prevB.addEventListener(
    "click",
    () => {
      startSlide("prev");
      SC.querySelectorAll(".breif .bg_C").forEach((elem) => {
        animate(elem);
      });
    },
    false
  );
});
