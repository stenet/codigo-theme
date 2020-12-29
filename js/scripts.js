import PostComments from "./post-comments.js";
import NavHandler from "./nav-handler.js";
import NavMobileHandler from "./nav-mobile-handler.js";
import "./wc-skill.js";
import "./wc-tag.js";
import "./wc-accordion.js";
// function initNavToggler() {
//   const navTogglerEl = document.getElementById("nav-mobile-toggler");
//   if (!navTogglerEl) {
//     return;
//   }
//   const navTogglerIcon = navTogglerEl.querySelector("i");
//   if (!navTogglerIcon) {
//     return;
//   }
//   const navEl = document.querySelector(".layout__nav");
//   if (!navEl) {
//     return;
//   }
//   const contentEl = document.querySelector(".layout__content");
//   if (!contentEl) {
//     return;
//   }
//   let isRunning = false;
//   let scrollY = 0;
//   let isVisible = !window.getComputedStyle(navEl).display == "none";
//   navTogglerEl.style.cursor = "pointer";
//   navTogglerEl.style.outline = "none";
//   navTogglerEl.addEventListener("click", async () => {
//     if (isRunning) {
//       return;
//     }
//     isRunning = true;
//     isVisible = !isVisible;
//     navTogglerIcon.classList.add("fa-spinner", "fa-spin");
//     if (isVisible) {
//       navTogglerIcon.classList.remove("fa-bars");
//       scrollY = window.scrollY;
//       const contentAnim = contentEl.animate({
//         opacity: 0
//       }, {
//         duration: 200,
//         easing: "ease-in-out",
//         fill: "both"
//       });
//       await contentAnim.finished;
//       contentAnim.cancel();
//       contentEl.style.display = "none";
//       window.scrollTo({
//         top: 0,
//         behavior: "auto"
//       });
//       navEl.style.marginLeft = `-${window.outerWidth}px`;
//       navEl.style.display = "block";
//       const navAnim = navEl.animate({
//         marginLeft: 0
//       }, {
//         duration: 200,
//         easing: "cubic-bezier(.52, 0, .53, 1)",
//         fill: "both"
//       });
//       await navAnim.finished;
//       navEl.style.marginLeft = "";
//       navAnim.cancel();
//       navTogglerIcon.classList.add("fa-times");
//     } else {
//       navTogglerIcon.classList.remove("fa-times");
//       const navAnim = navEl.animate({
//         opacity: 0
//       }, {
//         duration: 200,
//         easing: "cubic-bezier(.52, 0, .53, 1)",
//         fill: "both"
//       });
//       await navAnim.finished;
//       navEl.style.display = "";
//       navEl.style.opacity = "";
//       navAnim.cancel();
//       contentEl.style.opacity = 0;
//       contentEl.style.display = "";
//       window.scrollTo({
//         top: scrollY,
//         behavior: "auto"
//       });
//       const contentAnim = contentEl.animate({
//         opacity: 1
//       }, {
//         duration: 200,
//         easing: "ease-in-out",
//         fill: "both"
//       });
//       contentAnim.play();
//       await contentAnim.finished;
//       contentEl.style.opacity = null;
//       contentAnim.cancel();
//       navTogglerIcon.classList.add("fa-bars");
//     }
//     navTogglerIcon.classList.remove("fa-spinner", "fa-spin");
//     isRunning = false;
//   });
// }
window.addEventListener("DOMContentLoaded", () => {
    PostComments.initialize();
    new NavHandler();
    new NavMobileHandler();
});
