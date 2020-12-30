import PostComments from "./post-comments.js";
import NavHandler from "./nav-handler.js";
import NavMobileHandler from "./nav-mobile-handler.js";
import "./wc-skill.js";
import "./wc-tag.js";
import "./wc-accordion.js";

window.addEventListener("DOMContentLoaded", () => {
    PostComments.initialize();
    new NavHandler();
    new NavMobileHandler();
});
