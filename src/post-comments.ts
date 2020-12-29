export default class PostComments {
  constructor() { }

  static initialize() {
    const el = document.getElementById("create-post-comment");
    if (!el) {
      return;
    }

    el.addEventListener("click", () => {
      el.style.display = "none";
      document
        .querySelectorAll(".post-comment-container")
        .forEach(i => (<HTMLElement>i).style.display = "");
    });
  }
}
