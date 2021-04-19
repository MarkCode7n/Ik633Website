import Data from "./main.objects.js";
import "./define.js";
window.DefinePage.log = function () {
  console.log(Data.barner_elem.home);
};

window.DefinePage.SetBarner = function () {
  let index = 0;
  function merge() {
    const copyB = Data.barner_obj;
    const copyE = Data.barner_elem;
    const item = copyB[index];

    copyE.mjT1.textContent = item.hero_text;
    copyE.mjT2.textContent = item.hero_h2;
    copyE.gohref.href = item.button_link;
    copyE.gohref.querySelector("button").textContent = item.button_text;
    copyE.home.style.background = `linear-gradient(298deg, black, #68595566), url(${item.image_path}) center/cover no-repeat`;
    const { ...newE } = copyE;
    const keys = Object.keys(newE);
    const vals = Object.values(newE);
    // console.log(vals);

    vals.forEach((v, ind) => {
      animate(v);
    });
  }
  const animate = (e) => {
    e.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0.8,
        },
      ],
      {
        duration: 1500,
        fill: "both",
      }
    );
  };
  merge();

  class Action {
    constructor(cop1, cop2) {
      this.cop1 = cop1;
      this.cop2 = cop2;
    }
    next = () => {
      let e1 = this.cop1;
      let e2 = this.cop2;

      ++index;
      if (index === e2.length - 1) index = 0;
      merge();
    };
    prev() {
      let e1 = this.cop1;
      let e2 = this.cop2;

      if (index === 0) index = e2.length - 1;
      --index;
      merge();
    }
  }
  {
    const c1 = Data.barner_elem;
    const c2 = Data.barner_obj;
    const action = new Action(c1, c2);
    c1.next__btn.addEventListener("click", function () {
      action.next();
    });
    c1.prev__btn.addEventListener("click", function () {
      action.prev();
    });
    const interval = () => {
      if (c1.next__btn.click() || c1.prev__btn.click()) clearInterval(interval);
      setInterval(() => {
        action.next();
        merge();
      }, 15000);
    };
    interval();
  }
};
window.addEventListener("DOMContentLoaded", function () {
  return window.DefinePage.SetBarner(), window.DefinePage.addClass();
});
