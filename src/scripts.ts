import PostComments from "./post-comments";
import NavHandler from "./nav-handler";
import NavMobileHandler from "./nav-mobile-handler";
import "./wc-skill";
import "./wc-tag";
import "./wc-accordion";

window.addEventListener("DOMContentLoaded", () => {
    PostComments.initialize();
    new NavHandler();
    new NavMobileHandler();
});
