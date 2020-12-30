import AnimateUtils from "./animate-utils";
import { SwipeHandler, SwipeDirection } from "./swipe-handler";

export default class NavMobileHandler {
  private _headerEl: HTMLElement | null;
  private _navMainEl: HTMLElement | null;
  private _navMainBgEl: HTMLElement | null;
  private _navMobileEl: HTMLElement | null;
  private _navMobilButtonEl: HTMLElement | undefined | null;
  private _navMobilIconEl: HTMLElement | undefined | null;
  private _swipeHandler: SwipeHandler | undefined;

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

    this._navMobilButtonEl = <HTMLElement>this._navMobileEl!.querySelector("a[href='#']");
    if (!this._navMobilButtonEl) {
      return;
    }

    this._navMobilIconEl = this._navMobilButtonEl!.querySelector("i");
    if (!this._navMobilIconEl) {
      return;
    }

    this.registerToggle();
    this.registerSwipeHandler();
  }

  private registerToggle() {
    let isWorking = false;

    this._navMobilButtonEl!.addEventListener("click", async (e: MouseEvent) => {
      if (isWorking) {
        return;
      }
  
      isWorking = true;
      await this.toggle(e.x, e.y);
      isWorking = false;
      
    });
    window.addEventListener("resize", () => {
      if (!this._isVisible) {
        return;
      }

      this.toggle(0, 0, false);
    });
  }
  private registerSwipeHandler() {
    this._swipeHandler = new SwipeHandler();
    this._swipeHandler.registerSwipe((direction, x, y) => {
      switch (direction) {
        case SwipeDirection.Left: {
          if (!this._isVisible) {
            return;
          }

          this.toggle(x, y, true);
          break;
        }
        case SwipeDirection.Right: {
          if (this._isVisible) {
            return;
          }

          this.toggle(x, y, true);
          break;
        }
      }
    });
  }

  private async toggle(x: number, y: number, animate = true) {
    this._isVisible = !this._isVisible;

    this._isVisible
      ? document.body.style.overflow = "hidden"
      : document.body.style.overflow = "";

    if (this._isVisible) {
      await this.shrinkGrowCircle(x, y, animate);

      this._isVisible
        ? this._headerEl!.classList.add("mobile-nav--active")
        : this._headerEl!.classList.remove("mobile-nav--active");

      await this.showHideNav(animate);
    } else {
      await this.showHideNav(animate);

      this._isVisible
        ? this._headerEl!.classList.add("mobile-nav--active")
        : this._headerEl!.classList.remove("mobile-nav--active");

      await this.shrinkGrowCircle(x, y, animate);
    }

    this.toggleNavIcon();
  }
  private async shrinkGrowCircle(x: number, y: number, animate = true) {
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

      await AnimateUtils.animate(bg, style, animate ? 400 : 0);
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

      await AnimateUtils.animate(bg, style, animate ? 400 : 0);
    }
  }
  private async showHideNav(animate = true) {
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

      await AnimateUtils.animate(el, style, animate ? undefined : 0);
    } else {
      const style = {
        before: {
          display: "block",
          opacity: 1
        },
        after: {
          display: "",
          opacity: ""
        },
        animate: {
          opacity: 0
        }
      };

      await AnimateUtils.animate(el, style, animate ? undefined : 0);
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