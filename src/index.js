import galleryImage from "./js/gallery.js";
import responsiveMedia from "./js/header_responsive.js";
import hamburgerMenu from "./js/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
 hamburgerMenu(".btnHamb", ".navHamb", ".divHamb", ".li-mob", ".hamburger");
 galleryImage(".grid-gallery__image", "overlay", "overlayImage", ".close");
 responsiveMedia("(width < 320px)", ".logo");
});
