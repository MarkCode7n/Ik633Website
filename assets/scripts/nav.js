import "./define.js";

window.DefinePage.SetNav = function () {
  const navControl = document.getElementById("navControl");
  const navUl = document.getElementById("navUl");
  let isPressed = false;

  navControl.addEventListener("click", function () {
    if (!isPressed) {
      navControl.classList.add("clicked");
      navUl.classList.add("ready");
      document.body.style.overflow = "initial";
      isPressed = true;
    } else {
      navControl.classList.remove("clicked");
      navUl.classList.remove("ready");
      document.body.style.overflow = "none";
      isPressed = false;
    }
  });
};

document.querySelector("footer").innerHTML = ` <div class="footer__wrapper">
      <div class="container">
        <br /><br /><br />
        <div class="footer__content un_grid">
          <div class="content-A">
            <ul class="contentUl">
              <li class="item">
                <a href="https://ik633.netlify.app/assets/pages/about/about.html" class="link">About us</a>
              </li>
              <li class="item">
                <a href="https://ik633.netlify.app/assets/pages/blogs/blogs.html" class="link">Blog page</a>
              </li>
              <li class="item">
                <a href="https://ik633.netlify.app/assets/pages/services/services.html" class="link">what we offer</a>
              </li>
            </ul>
          </div>

          <div class="content-B">
            <ul class="contentUl">
              <li class="item">
                <a href="https://ik633.netlify.app/assets/pages/contact/contact.html" class="link">connect with us</a>
              </li>
              <li class="item"><a href="#" class="link">sponsor us</a></li>
              <li class="item">
                <a href="https://ik633.netlify.app/assets/pages/blogs/blogs.html" class="link">Latest news</a>
              </li>
            </ul>
          </div>

          <div class="content-C">
            <ul class="contentUl">
              <li class="item">
                <a href="https://ik633.netlify.app/assets/pages/contact/contact.html" class="link">our location</a>
              </li>
              <li class="item"></li>
              <li class="item"><a href="https://www.instagram.com/ik_canaanland/" class="link">instagram</a></li>
              <li class="item"><a href="https://api.whatsapp.com/send/?phone=2347067732539&text=Hi+am+interested+in+knowing+more+about+IK633" class="link">whatsApp</a></li>
            </ul>
          </div>
          <div class="content-D">
            <ul class="contentUl">
              <li class="item">
                <a href="https://www.facebook.com/pg/ik-Place-2333288953388587/posts/" target="_blank"
                  class="link">facebook pages</a>
              </li>

              <li class="item"><a href="ikposisi2@gmail.com" class="link">Gmail</a></li>
              <li class="item"><a href="https://twitter.com/ikplace" target="_blank" class="link">Twitter</a></li>
              <!-- <li class="item"><a href="#" class="link">youTube</a></li> -->
            </ul>
          </div>
        </div>
        <div class="fair__well">
          <div class="container">
            <ul>
              <li>
                <a href="https://www.facebook.com/pg/ik-Place-2333288953388587/posts/" target="_blank">
                  <img src="https://ik633.netlify.app/assets/svgs/socials/facebook.svg" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ik_canaanland/" target="_blank"">
                    <img
                      src="https://ik633.netlify.app/assets/svgs/socials/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ikplace" target="_blank">
                  <img src="https://ik633.netlify.app/assets/svgs/socials/twitter.svg" alt="twitter" />
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">
                  <img src="https://ik633.netlify.app/assets/svgs/socials/youtube.svg" alt="youtube" /></a>
              </li>
              <li>
                <a href="mailto:ikposisi2@gmail.com?subject=welcome%20to%ik633" target="_blank">
                  <img src="https://ik633.netlify.app/assets/svgs/socials/gmail.svg" alt="gmail" /></a>
              </li>
              <li>
                <a href="#">
                  <img src="https://ik633.netlify.app/assets/svgs/socials/whatsapp.svg" alt="whatsapp" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
window.addEventListener("DOMContentLoaded", () => {
  return window.DefinePage.SetNav();
});
