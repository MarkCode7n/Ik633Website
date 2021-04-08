const barner_obj: {
  id: number;
  image_path: string;
  hero_text: string;
  button_text: string;
  button_link: string;
}[] =
  //
  [{ id: 1, image_path: "", hero_text: "", button_link: "", button_text: "" }];

const barner_elems: {
  id: number;
  image_path_elem: HTMLElement;
  hero_text_elem: HTMLHeadingElement;
  button_text_elem: HTMLButtonElement;
  button_link_elem: HTMLAnchorElement;
}[] = [
  {
    id: 1,
    image_path_elem: document.querySelector(""),
    hero_text_elem: document.querySelector(""),
    button_text_elem: document.querySelector(""),
    button_link_elem: document.querySelector(""),
  },
  {
    id: 1,
    image_path_elem: document.querySelector(""),
    hero_text_elem: document.querySelector(""),
    button_text_elem: document.querySelector(""),
    button_link_elem: document.querySelector(""),
  },
];

export default { barner_obj, barner_elems };
