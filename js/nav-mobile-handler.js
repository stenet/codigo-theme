var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AnimateUtils from "./animate-utils.js";
export default class NavMobileHandler {
    constructor() {
        this._isVisible = false;
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
        this._navMobilIconEl = this._navMobileEl.querySelector("i");
        if (!this._navMobilIconEl) {
            return;
        }
        this.registerToggle();
    }
    registerToggle() {
        let isWorking = false;
        this._navMobileEl.addEventListener("click", (e) => __awaiter(this, void 0, void 0, function* () {
            if (isWorking) {
                return;
            }
            isWorking = true;
            this._isVisible = !this._isVisible;
            this._isVisible
                ? document.body.style.overflow = "hidden"
                : document.body.style.overflow = "";
            if (this._isVisible) {
                yield this.shrinkGrowCircle(e.x, e.y);
                this._isVisible
                    ? this._headerEl.classList.add("mobile-nav--active")
                    : this._headerEl.classList.remove("mobile-nav--active");
                yield this.showHideNav();
            }
            else {
                yield this.showHideNav();
                this._isVisible
                    ? this._headerEl.classList.add("mobile-nav--active")
                    : this._headerEl.classList.remove("mobile-nav--active");
                yield this.shrinkGrowCircle(e.x, e.y);
            }
            this.toggleNavIcon();
            isWorking = false;
        }));
    }
    shrinkGrowCircle(x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            const bg = this._navMainBgEl;
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
                yield AnimateUtils.animate(bg, style, 400);
            }
            else {
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
                yield AnimateUtils.animate(bg, style, 400);
            }
        });
    }
    showHideNav() {
        return __awaiter(this, void 0, void 0, function* () {
            const el = this._navMainEl;
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
                yield AnimateUtils.animate(el, style);
            }
            else {
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
                yield AnimateUtils.animate(el, style);
            }
        });
    }
    toggleNavIcon() {
        const el = this._navMobilIconEl;
        if (this._isVisible) {
            el.classList.remove("fa-bars");
            el.classList.add("fa-times");
        }
        else {
            el.classList.remove("fa-times");
            el.classList.add("fa-bars");
        }
    }
}
