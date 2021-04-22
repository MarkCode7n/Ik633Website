"use strict";

var barner_obj =
  //
  [
    {
      id: 1,
      image_path: "../assets/images/pages/iphone-12-pro-gallery-1.jpg",
      hero_text: "Hands on the best",
      hero_h2: "beyond limits",
      button_link: "#",
      srcs: [
        "../assets/images/pages/iphone-12-pro-gallery-1.jpg",
        "../assets/images/pages/iphone-12-pro-gallery-4.jpg",
      ],
      button_text: "more",
      random: function (m, s) {
        // let s = this.srcs;
        // let imp = this.image_path;
        return (m = Math.floor(Math.random() * s.length));
      },
    },
    {
      id: 2,
      image_path: "../assets/images/pages/iphone-12-pro-gallery-4.jpg",
      hero_text: "Access the latest",
      hero_h2: "at your ease",
      button_link: "#",
      button_text: "more",
    },

    {
      id: 3,
      image_path: "../assets/images/pages/Real-estate.jpg",
      hero_text: "don't miss the best",
      hero_h2: "",
      button_link: "#",
      button_text: "more",
    },
    {
      id: 4,
      image_path: "../assets/images/pages/galaxy-s20_highlights_kv_00.jpg",
      hero_text: "5",
      hero_h2: "",
      button_link: "#",
      button_text: "more",
    },
    {
      id: 5,
      image_path: "../assets/images/pages/Zrzut-ekranu-864.jpg",
      hero_text: "6",
      hero_h2: "",
      button_link: "#",
      button_text: "more",
    },
  ];
setInterval(() => {
  barner_obj[0].random(barner_obj[0].image_path, barner_obj[0].srcs);
}, 1000);
const barner_elem = {
  home: document.getElementById("home"),
  mjT1: document.getElementById("mjT1"),
  mjT2: document.getElementById("mjT2"),
  gohref: document.getElementById("gohref"),
  prev__btn: document.getElementById("prev__btn"),
  next__btn: document.getElementById("next__btn"),
};
const global_elem = [{}];
export default { barner_obj, barner_elem, global_elem };
