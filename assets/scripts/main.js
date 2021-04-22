import Data from "./main.objects.js";
import "./define.js";
window.DefinePage.log = function () {
  // console.log(Data.barner_elem.home);
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
    copyE.home.style.background = `linear-gradient(298deg, black,#00000000), url(${item.image_path}) center/cover no-repeat`;
    // const { home, ...newE } = copyE;
    // const { ...newE } = copyE;
    const { home } = copyE;
    // convert keys to an array
    const keys = Object.keys(home);
    // convert values to an array
    const vals = Object.values(home);
    // \\console.log(vals, keys);

    // vals.forEach((v, ind) => {
    //   animate(v);
    // });
    animate(home);
  }

  const animate = (e) => {
    e.animate(
      [
        {
          opacity: 0.9,
          // transform: "scale(1.2)",
        },
        {
          opacity: 1,
          // transform: "scale(1)",
        },
      ],
      {
        duration: 2000,
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
      }, 40000);
    };
    interval();
  }
};
window.addEventListener("DOMContentLoaded", function () {
  return window.DefinePage.SetBarner(), window.DefinePage.addClass();
});
