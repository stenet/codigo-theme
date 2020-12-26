function getElementHeight(el) {
  const clone = el.cloneNode(true);

  clone.style.position = "absolute";
  clone.style.top = "-1000px";
  clone.style.visibility = "hidden";
  clone.style.display = "";

  document.body.appendChild(clone);

  const height = clone.offsetHeight;
  document.body.removeChild(clone);
  return height;
}

function initLayoutVisiblityToggler() {
  const opendIcon = "fa-angle-up";
  const closedIcon = "fa-angle-down";

  document
  .querySelectorAll("div[data-toggle-id]")
  .forEach(container => {
    const icon = document.createElement("i");
    icon.classList.add("fas");
    container.style.cursor = "pointer";
    container.style.outline = "none";

    container.appendChild(icon);

    const idEl = container.dataset.toggleId;
    if (!idEl) {
      return;
    }

    const el = document.getElementById(idEl);
    if (!el) {
      return;
    }

    let isVisible = localStorage.getItem(idEl) == "true";
    
    const height = getElementHeight(el);
    el.style.overflowY = "hidden";
    
    const update = async (anim) => {
      const newStyle = {
        height: isVisible ? `${height}px` : 0,
        opacity: isVisible ? 1 : 0
      };

      icon.classList.remove(isVisible ? closedIcon : opendIcon);
      icon.classList.add(isVisible ? opendIcon : closedIcon);

      if (anim) {
        const animation = el.animate([newStyle], {
          duration: 200,
          easing: "ease-in-out",
          fill: "both"
        });

        await animation.finished;
        Object.assign(el.style, newStyle);
        setLayoutNavPosition();

        animation.cancel();
      } else {
        Object.assign(el.style, newStyle);
        setLayoutNavPosition();
      }

      localStorage.setItem(idEl, isVisible);
    }
    const toggle = async () => {
      isVisible = !isVisible;
      update(true);
    };


    update(false);
    container.addEventListener("click", () => {
      toggle(true);
    });
  });
}

function initNavToggler() {
  const navTogglerEl = document.getElementById("nav-mobile-toggler");
  if (!navTogglerEl) {
    return;
  }

  const navTogglerIcon = navTogglerEl.querySelector("i");
  if (!navTogglerIcon) {
    return;
  }

  const navEl = document.querySelector(".layout__nav");
  if (!navEl) {
    return;
  }

  const contentEl = document.querySelector(".layout__content");
  if (!contentEl) {
    return;
  }

  let isRunning = false;
  let scrollY = 0;
  let isVisible = !window.getComputedStyle(navEl).display == "none";
  navTogglerEl.style.cursor = "pointer";
  navTogglerEl.style.outline = "none";
  navTogglerEl.addEventListener("click", async () => {
    if (isRunning) {
      return;
    }

    isRunning = true;
    isVisible = !isVisible;

    navTogglerIcon.classList.add("fa-spinner", "fa-spin");
    if (isVisible) {
      navTogglerIcon.classList.remove("fa-bars");
      
      scrollY = window.scrollY;

      const contentAnim = contentEl.animate({
        opacity: 0
      }, {
        duration: 200,
        easing: "ease-in-out",
        fill: "both"
      });
  
      await contentAnim.finished;
      contentAnim.cancel();

      contentEl.style.display = "none";
      
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });

      navEl.style.marginLeft = `-${window.outerWidth}px`;
      navEl.style.display = "block";
  
      const navAnim = navEl.animate({
        marginLeft: 0
      }, {
        duration: 200,
        easing: "cubic-bezier(.52, 0, .53, 1)",
        fill: "both"
      });
  
      await navAnim.finished;
  
      navEl.style.marginLeft = "";
      navAnim.cancel();

      navTogglerIcon.classList.add("fa-times");
    } else {
      navTogglerIcon.classList.remove("fa-times");

      const navAnim = navEl.animate({
        opacity: 0
      }, {
        duration: 200,
        easing: "cubic-bezier(.52, 0, .53, 1)",
        fill: "both"
      });

      await navAnim.finished;

      navEl.style.display = "";
      navEl.style.opacity = "";
      navAnim.cancel();

      contentEl.style.opacity = 0;
      contentEl.style.display = "";

      window.scrollTo({
        top: scrollY,
        behavior: "auto"
      });

      const contentAnim = contentEl.animate({
        opacity: 1
      }, {
        duration: 200,
        easing: "ease-in-out",
        fill: "both"
      });
  
      contentAnim.play();
      await contentAnim.finished;

      contentEl.style.opacity = null;
      contentAnim.cancel();
  
      navTogglerIcon.classList.add("fa-bars");
    }

    navTogglerIcon.classList.remove("fa-spinner", "fa-spin");
    isRunning = false;
  });
}

function initCreatePostCommand() {
  const el = document.getElementById("create-post-comment");
  if (!el) {
    return;
  }

  el.addEventListener("click", () => {
    el.style.display = "none";
    document.querySelectorAll(".post-comments").forEach(i => i.style.display = "");
  });
}

let layoutNavEl;
let layoutNavFillerEl;
function setLayoutNavPosition() {
  if (!layoutNavEl) {
    layoutNavEl = document.querySelector(".layout__nav__sticky");
  }
  if (!layoutNavEl) {
    return;
  }

  if (!layoutNavFillerEl) {
    layoutNavFillerEl = document.querySelector(".layout__nav__sticky__filler");
  }
  if (!layoutNavFillerEl) {
    return;
  }

  const navBottom = layoutNavEl.scrollTop + layoutNavEl.offsetHeight;
  const windowHeight = window.innerHeight;
  const windowBottom = windowHeight + window.scrollY;
  
  if (navBottom <= windowHeight || window.scrollY == 0) {
    layoutNavEl.classList.remove("layout__nav__sticky--bottom");
    layoutNavEl.classList.add("layout__nav__sticky--top");
    layoutNavFillerEl.classList.remove("layout__nav__sticky__filler--active");
  } else if (navBottom < windowBottom) {
    layoutNavEl.classList.remove("layout__nav__sticky--top");
    layoutNavFillerEl.classList.add("layout__nav__sticky__filler--active");
    layoutNavEl.classList.add("layout__nav__sticky--bottom");
  } else {
    layoutNavFillerEl.classList.remove("layout__nav__sticky__filler--active");
    layoutNavEl.classList.remove("layout__nav__sticky--bottom");
    layoutNavEl.classList.remove("layout__nav__sticky--top");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initLayoutVisiblityToggler();
  initNavToggler();
  initCreatePostCommand();
  setLayoutNavPosition();
});

window.addEventListener("resize", () => {
  setLayoutNavPosition();
});

window.addEventListener("scroll", () => {
  setLayoutNavPosition();
})