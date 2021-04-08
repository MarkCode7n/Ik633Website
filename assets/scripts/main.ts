import Data from "./main.objects";

declare global {
  interface Window {
    DefinePage: any;
  }
}

window.DefinePage = window.DefinePage || {};

window.DefinePage.Loader = function () {};
