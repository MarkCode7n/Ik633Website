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
      button_text: "more",
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

function $(id = HTMLElement) {
  return document.querySelector(id);
  // "string" === id ? document.querySelector(id) : id;
}
const b_e = {
  prevB: $("#prev__btn"),
  nextB: $("#next__btn"),
  SC: $(".Slide_C"),
};
const global_elem = [{}];
export default { b_e, barner_obj };
