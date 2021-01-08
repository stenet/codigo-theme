import { AnimateUtils, IAnimateOptions } from "./animate-utils";
import { SwipeHandler, SwipeDirection } from "./swipe-handler";

export default class NavMobileHandler {
  private _headerEl: HTMLElement | null;
  private _navMainEl: HTMLElement | null;
  private _navMobileEl: HTMLElement | null;
  private _navMobilButtonEl: HTMLElement | undefined | null;
  private _navMobilIconEl: HTMLElement | undefined | null;
  private _swipeHandler: SwipeHandler | undefined;

  private _isVisible = false;

  constructor() {
    this._headerEl = document.querySelector("header");
    this._navMainEl = document.querySelector(".nav-main");
    this._navMobileEl = document.querySelector(".nav-mobile");
    
    if (!this._headerEl) {
      return;
    }
    if (!this._navMainEl) {
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
    this.registerResizeHandler();
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
  }
  private registerResizeHandler() {
    let oldWidth = window.outerWidth;

    window.addEventListener("resize", () => {
      if (oldWidth == window.outerWidth) {
        return;
      }

      oldWidth = window.outerWidth;

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
      this._isVisible
        ? this._headerEl!.classList.add("mobile-nav--active")
        : this._headerEl!.classList.remove("mobile-nav--active");

      await this.showHideNav(animate);
    } else {
      await this.showHideNav(animate);

      this._isVisible
        ? this._headerEl!.classList.add("mobile-nav--active")
        : this._headerEl!.classList.remove("mobile-nav--active");
    }

    this.toggleNavIcon();
  }
  private async showHideNav(animate = true) {
    const el = this._navMainEl!;
    let delay = 0;

    if (this._isVisible) {
      const style: IAnimateOptions = {
        element: el,
        duration: animate ? undefined : 0,
        before: {
          display: "block",
          opacity: 0
        },
        animate: {
          opacity: 1
        }
      };

      const childStyles = this.childIterator(this._navMainEl!, (child) => {
        delay += 30;

        return {
          element: child,
          before: {
            opacity: "0",
            transform: "translateX(25px)"
          },
          animate: {
            opacity: "1",
            transform: "translateX(0)"
          },
          delay: delay
        };
      });

      await AnimateUtils.animate([style, ...childStyles]);
    } else {
      const style: IAnimateOptions = {
        element: el,
        duration: animate ? undefined : 0,
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

      await AnimateUtils.animate(style);
    }
  }
  private childIterator(parent: HTMLElement, action: {(child: HTMLElement): IAnimateOptions}) : IAnimateOptions[] {
    const result: IAnimateOptions[] = [];

    Array.from(parent.children).forEach(child => {
      if (!child.tagName) {
        return;
      }

      const htmlChild = <HTMLElement>child;
      if (htmlChild.style.display == "none") {
        return;
      }

      const animateOptions = action(htmlChild);
      if (!animateOptions) {
        return;
      }

      result.push(animateOptions);
    });

    return result;
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