import Utils from "./utils";

class WcAccordion extends HTMLElement {
  private _contentContainer: HTMLElement | undefined;
  private _angle: HTMLElement | undefined;
  private _localStorageKey: string | undefined;

  private _icon = "fa-angle-down";
  private _isContentVisible = false;
  private _isWorking = false;

  constructor() {
    super();
  }

  connectedCallback() {
    document.addEventListener("DOMContentLoaded", () => this.render())
  }

  private render() {
    if (this.id) {
      this._localStorageKey = `accordion-${this.id}`;
    }

    const isDefaultOpen = this.getAttribute("accordion-default") == "open";

    if (this._localStorageKey) {
      const val = localStorage.getItem(this._localStorageKey);
      if (val == void(0)) {
        this._isContentVisible = isDefaultOpen;
      } else {
        this._isContentVisible = val == true.toString();
      }
    } else {
      this._isContentVisible = isDefaultOpen;
    }

    const accordionText = this.getAttribute("accordion-text") || "";
    
    const outer = document.createElement("div");
    
    const header = document.createElement("div");
    outer.appendChild(header);
    header.classList.add("flex", "items-center", "cursor-pointer");
    header.addEventListener("click", async () => {
      if (this._isWorking) {
        return;
      }

      this._isWorking = true;
      this._isContentVisible = !this._isContentVisible;
      await this.updateVisiblity();

      this._isWorking = false;
    });
    
    const text = document.createElement("div");
    header.appendChild(text);
    text.classList.add("flex-grow", "select-none", "group");
    text.innerText = accordionText;
    
    this._angle = document.createElement("i");
    header.appendChild(this._angle);
    this._angle.classList.add("fas", this._icon);
    
    this._contentContainer = document.createElement("div");
    outer.appendChild(this._contentContainer);
    this._contentContainer.classList.add("overflow-y-hidden");

    const innerContent = document.createElement("div");
    this._contentContainer.appendChild(innerContent);
    innerContent.classList.add("mt-4", "ml-4");
    
    while (this.childNodes.length > 0) {
      innerContent.appendChild(this.childNodes.item(0));
    }
    this.appendChild(outer);
    
    this.registerResizeHandler();
    this.updateVisiblity(false);
  }


  private registerResizeHandler() {
    let oldWidth = window.outerWidth;

    window.addEventListener("resize", () => {
      if (oldWidth == window.outerWidth) {
        return;
      }

      oldWidth = window.outerWidth;

      if (!this._isContentVisible) {
        return;
      }

      setTimeout(() => {
        this.updateVisiblity(false);
      }, 0);
    });
  }  
  private async updateVisiblity(animate = true) {
    const contentContainerHeight = Utils.getElementHeight(this._contentContainer!);

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
        this._contentContainer!.style.height = `${contentContainerHeight}px`;
      }

      const contentAnimation = this._contentContainer!.animate([newContainerStyle], {
        duration: 200,
        easing: "ease-in-out"
      });

      const angleAnimation = this._angle!.animate([newAngleStyle], {
        duration: 200,
        easing: "ease-in-out"
      });
      
      contentAnimation.finished.then(() => {
        Object.assign(this._contentContainer!.style, newContainerStyle);
      });
      
      angleAnimation.finished.then(() => {
        Object.assign(this._angle!.style, newAngleStyle);

        this.dispatchEvent(new CustomEvent("accordion-changed", {
          bubbles: true
        }));
      });

      await contentAnimation.finished;
      await angleAnimation.finished;
    }
    else {
      Object.assign(this._contentContainer!.style, newContainerStyle);
      Object.assign(this._angle!.style, newAngleStyle);
    }

    if (this._localStorageKey) {
      localStorage.setItem(this._localStorageKey, this._isContentVisible.toString());
    }
  }
}

customElements.define("wc-accordion", WcAccordion);
