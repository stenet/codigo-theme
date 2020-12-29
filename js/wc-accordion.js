import Utils from "./utils.js";
class WcAccordion extends HTMLElement {
    constructor() {
        super();
        this._icon = "fa-angle-down";
        this._isContentVisible = false;
    }
    connectedCallback() {
        document.addEventListener("DOMContentLoaded", () => this.render());
    }
    render() {
        if (this.id) {
            this._localStorageKey = `accordion-${this.id}`;
        }
        const isDefaultOpen = this.getAttribute("accordion-default") == "open";
        if (this._localStorageKey) {
            const val = localStorage.getItem(this._localStorageKey);
            if (val == void (0)) {
                this._isContentVisible = isDefaultOpen;
            }
            else {
                this._isContentVisible = val == true.toString();
            }
        }
        else {
            this._isContentVisible = isDefaultOpen;
        }
        const accordionText = this.getAttribute("accordion-text") || "";
        const outer = document.createElement("div");
        const header = document.createElement("div");
        outer.appendChild(header);
        header.classList.add("flex", "items-center", "cursor-pointer");
        header.addEventListener("click", () => {
            this._isContentVisible = !this._isContentVisible;
            this.updateVisiblity();
        });
        const text = document.createElement("div");
        header.appendChild(text);
        text.classList.add("flex-grow", "group");
        text.innerText = accordionText;
        this._angle = document.createElement("i");
        header.appendChild(this._angle);
        this._angle.classList.add("fas", this._icon);
        this._contentContainer = document.createElement("div");
        outer.appendChild(this._contentContainer);
        this._contentContainer.classList.add("overflow-y-hidden", "mt-2");
        while (this.childNodes.length > 0) {
            this._contentContainer.appendChild(this.childNodes.item(0));
        }
        this.appendChild(outer);
        this.updateVisiblity(false);
    }
    updateVisiblity(animate = true) {
        const contentContainerHeight = Utils.getElementHeight(this._contentContainer);
        //TODO sollte doch gehen => war falsche Reihenfolge beim Einfügen
        const newContainerStyle = {
            height: this._isContentVisible
                ? (contentContainerHeight ? `${contentContainerHeight}px` : "auto")
                : "0",
            opacity: this._isContentVisible
                ? 1
                : 0
        };
        const newAngleStyle = {
            transform: this._isContentVisible
                ? "rotate(180deg)"
                : "rotate(0deg)"
        };
        if (animate) {
            if (!this._isContentVisible) {
                this._contentContainer.style.height = `${contentContainerHeight}px`;
            }
            this._contentContainer.animate([newContainerStyle], {
                duration: 200,
                easing: "ease-in-out"
            }).finished.then(() => {
                Object.assign(this._contentContainer.style, newContainerStyle);
            });
            this._angle.animate([newAngleStyle], {
                duration: 200,
                easing: "ease-in-out"
            }).finished.then(() => {
                Object.assign(this._angle.style, newAngleStyle);
                this.dispatchEvent(new CustomEvent("accordion-changed", {
                    bubbles: true
                }));
            });
        }
        else {
            Object.assign(this._contentContainer.style, newContainerStyle);
            Object.assign(this._angle.style, newAngleStyle);
        }
        if (this._localStorageKey) {
            localStorage.setItem(this._localStorageKey, this._isContentVisible.toString());
        }
    }
}
customElements.define("wc-accordion", WcAccordion);
