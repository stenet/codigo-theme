class WcTag extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    document.addEventListener("DOMContentLoaded", () => this.render())
  }
  
  private render() {
    const tagColor = this.getAttribute("tag-color") || "var(--blue)";

    const outer = document.createElement("div");
    outer.classList.add("text-white", "px-2", "py-1", "rounded", "text-xs", "font-medium", "leading-tight");
    outer.style.backgroundColor = tagColor;

    while (this.childNodes.length > 0) {
      const item = <HTMLElement>this.childNodes.item(0);
      if (item.tagName == "A") {
        item.classList.add("superplain", "text-white");
      }

      outer.appendChild(item);
    }
    this.appendChild(outer);
  }
}

customElements.define("wc-tag", WcTag);
