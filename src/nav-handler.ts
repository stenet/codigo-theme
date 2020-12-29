export default class NavHandler {
  private _navMainEl: HTMLElement | null;
  private _navMailFiller: HTMLElement | null;

  constructor() {
    this._navMainEl = document.querySelector(".nav-main");
    this._navMailFiller = document.querySelector(".nav-main__filler");

    if (!this._navMainEl) {
      return;
    }
    if (!this._navMailFiller) {
      return;
    }

    this._navMainEl.addEventListener("accordion-changed", () => {
      this.setLayoutNavPosition();
    })

    window.addEventListener("resize", () => {
      this.setLayoutNavPosition();
    });
    window.addEventListener("scroll", () => {
      this.setLayoutNavPosition();
    });

    this.setLayoutNavPosition();
  }
  
  setLayoutNavPosition() {
    const navBottom = this._navMainEl!.scrollTop + this._navMainEl!.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowBottom = windowHeight + window.scrollY;

    if (navBottom <= windowHeight || window.scrollY == 0) {
      this._navMainEl!.classList.remove("nav-main--bottom");
      this._navMainEl!.classList.add("nav-main--top");
      this._navMailFiller!.classList.remove("nav-main__filler--active");
    }
    else if (navBottom < windowBottom) {
      this._navMainEl!.classList.remove("nav-main--top");
      this._navMailFiller!.classList.add("nav-main__filler--active");
      this._navMainEl!.classList.add("nav-main--bottom");
    }
    else {
      this._navMailFiller!.classList.remove("nav-main__filler--active");
      this._navMainEl!.classList.remove("nav-main--bottom");
      this._navMainEl!.classList.remove("nav-main--top");
    }
  }
}
