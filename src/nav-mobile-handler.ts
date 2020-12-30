import AnimateUtils from "./animate-utils";

export default class NavMobileHandler {
  private _headerEl: HTMLElement | null;
  private _navMainEl: HTMLElement | null;
  private _navMainBgEl: HTMLElement | null;
  private _navMobileEl: HTMLElement | null;
  private _navMobilIconEl: HTMLElement | undefined | null;

  private _isVisible = false;

  constructor() {
    this._headerEl = document.querySelector("header");
    this._navMainEl = document.querySelector(".nav-main");
    this._navMainBgEl = document.querySelector(".nav-main__background");
    this._navMobileEl = document.querySelector(".nav-mobile");
    
    if (!this._headerEl) {
      return;
    }
    if (!this._navMainEl) {
      return;
    }
    if (!this._navMainBgEl) {
      return;
    }
    if (!this._navMobileEl) {
      return;
    }

    this._navMobilIconEl = this._navMobileEl!.querySelector("i");
    if (!this._navMobilIconEl) {
      return;
    }

    this.registerToggle();
  }

  private registerToggle() {
    let isWorking = false;

    this._navMobileEl!.addEventListener("click", async (e: MouseEvent) => {
      if (isWorking) {
        return;
      }

      isWorking = true;
      this._isVisible = !this._isVisible;

      this._isVisible
        ? document.body.style.overflow = "hidden"
        : document.body.style.overflow = "";

      if (this._isVisible) {
        await this.shrinkGrowCircle(e.x, e.y);

        this._isVisible
          ? this._headerEl!.classList.add("mobile-nav--active")
          : this._headerEl!.classList.remove("mobile-nav--active");

        await this.showHideNav();
      } else {
        await this.showHideNav();

        this._isVisible
          ? this._headerEl!.classList.add("mobile-nav--active")
          : this._headerEl!.classList.remove("mobile-nav--active");

        await this.shrinkGrowCircle(e.x, e.y);
      }

      this.toggleNavIcon();

      isWorking = false;
    });
  }
  private async shrinkGrowCircle(x: number, y: number) {
    const bg = this._navMainBgEl!;

    if (this._isVisible) {
      const style = {
        before: {
          top: `${y}px`,
          left: `${x}px`,
          opacity: "0",
          width: "10px",
          height: "10px",
          borderRadius: "100%",
          transform: "scale(0)"
        },
        animate: {
          transform: `scale(${Math.round(Math.max(window.outerHeight, window.outerWidth) / 4)})`,
          opacity: 1
        }
      };

      await AnimateUtils.animate(bg, style, 400);
    } else {
      const style = {
        animate: {
          transform: "scale(0)",
          opacity: 0
        },
        after: {
          width: "0",
          height: "0"
        }
      };

      await AnimateUtils.animate(bg, style, 400);
    }
  }
  private async showHideNav() {
    const el = this._navMainEl!;

    if (this._isVisible) {
      const style = {
        before: {
          display: "block",
          opacity: 0
        },
        animate: {
          opacity: 1
        }
      };

      await AnimateUtils.animate(el, style);
    } else {
      const style = {
        before: {
          display: "block",
          opacity: 1
        },
        after: {
          display: "none"
        },
        animate: {
          opacity: 0
        }
      };

      await AnimateUtils.animate(el, style);
    }
  }
  private toggleNavIcon() {
    const el = this._navMobilIconEl!;
    
    if (this._isVisible) {
      el.classList.remove("fa-bars");
      el.classList.add("fa-times");
    } else {
      el.classList.remove("fa-times");
      el.classList.add("fa-bars");
    }
  }
}