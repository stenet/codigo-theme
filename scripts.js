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
  document
  .querySelectorAll("div[data-toggle-id]")
  .forEach(iconContainer => {
    const icon = document.createElement("i");
    icon.classList.add("fas", "fa-eye");
    icon.style.cursor = "pointer";

    iconContainer.appendChild(icon);

    const idEl = iconContainer.dataset.toggleId;
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
    
    const update = (anim) => {
      const newStyle = {
        height: isVisible ? `${height}px` : 0,
        opacity: isVisible ? 1 : 0
      };

      icon.classList.remove(isVisible ? "fa-eye-slash" : "fa-eye");
      icon.classList.add(isVisible ? "fa-eye" : "fa-eye-slash");

      if (anim) {
        const animation = el.animate([newStyle], {
          duration: 200,
          easing: "ease-in-out",
          fill: "both"
        });

        animation.play();
      } else {
        Object.assign(el.style, newStyle);
      }

      localStorage.setItem(idEl, isVisible);
    }
    const toggle = async () => {
      isVisible = !isVisible;
      update(true);
    };


    update(false);
    iconContainer.addEventListener("click", () => {
      toggle(true);
    });
  });
}

function initNavToggler() {
  const navTogglerEl = document.getElementById("nav-toggler");
  if (!navTogglerEl) {
    return;
  }

  const navEl = document.querySelector(".layout__nav");
  if (!navEl) {
    return;
  }

  let isVisible = !window.getComputedStyle(navEl).display == "none";
  navTogglerEl.style.cursor = "pointer";
  navTogglerEl.addEventListener("click", () => {
    isVisible = !isVisible;

    navEl.style.display = isVisible
      ? "block"
      : "";

    if (isVisible) {
      window.scroll({
        top: 0,
        behavior: "auto"
      });
    }
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

let layoutNavSplitterTopSet = false;
function setLayoutNavSplitterTop() {
  if (layoutNavSplitterTopSet) {
    return;
  }

  const navSplitterEl = document.querySelector(".layout__nav-splitter");
  if (!navSplitterEl) {
    return;
  }
  
  const navMobileStickyEl = document.querySelector(".layout__nav-mobile__sticky");
  if (!navMobileStickyEl) {
    return;
  }

  const top = navMobileStickyEl.offsetTop + navMobileStickyEl.offsetHeight;
  if (!top) {
    return;
  }

  navSplitterEl.style.top = `${top}px`;
  layoutNavSplitterTopSet = true;
}

window.addEventListener("DOMContentLoaded", () => {
  initLayoutVisiblityToggler();
  initNavToggler();
  initCreatePostCommand();
  setLayoutNavSplitterTop();
});

window.addEventListener("resize", () => {
  setLayoutNavSplitterTop();
});