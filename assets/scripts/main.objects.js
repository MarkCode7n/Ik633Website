function p(s) {
  if (window.screen.availWidth <= 299) {
    return s.length > 3 ? s.slice(0, 3) + "-" + s.slice(3) : s;
  } else {
    return s;
  }
}
const baner_data = [
  {
    id: 1,
    img_path: "../assets/images/pages/photo.jpg",
    h1: "Quality Gadgets",
    h4: "at your access",
    bLink:
      "https://ik633.netlify.app/assets/pages/services/Gadgets/gadgets.html",
    bTxt: "learn more",
  },
  {
    id: 2,
    img_path: "../assets/images/pages/pexels-photo-323780.jpeg",
    h1: "Enroll Real Estates",
    h4: "at your glance",
    bLink:
      "https://ik633.netlify.app/assets/pages/services/RealEstates/realEstates.html",
    bTxt: "learn more",
  },
  {
    id: 3,
    img_path: "../assets/images/pages/iphone-12-pro-gallery-4.jpg",
    h1: "Access The Latest",
    h4: "satisfy your zest",
    bLink:
      "https://ik633.netlify.app/assets/pages/services/Gadgets/gadgets.html",
    bTxt: "learn more",
  },
  {
    id: 4,
    img_path:
      "../assets/images/pages/businesses-outsourcing-covid-19-survival-strategy.jpeg",
    h1: ` your ${p("outsourcing")}`,
    h4: "needs met",
    bLink: "https://ik633.netlify.app/assets/pages/services/jobs/jobs.html",
    bTxt: "learn more",
  },
];

export default baner_data;
