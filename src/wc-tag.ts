class WcTag extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    document.addEventListener("DOMContentLoaded", () => this.render())
  }
  
  private render() {
    const tagColor = this.getAttribute("tag-hue") || "var(--blue-hue)";
    const shine = this.hasAttribute("tag-shine");

    const outer = document.createElement("div");
    outer.classList.add("text-white", "px-2", "py-1", "mb-1", "rounded", "text-xs", "font-medium");
    outer.style.backgroundColor = `hsl(${tagColor}, ${shine ? "100%" : "60%"}, ${shine ? "50%" : "80%"})`;
    outer.style.color = `hsl(${tagColor}, ${shine ? "80%" : "60%"}, ${shine ? "100%" : "20%"})`;
    
    while (this.childNodes.length > 0) {
      const item = <HTMLElement>this.childNodes.item(0);
      if (item.tagName == "A") {
        item.classList.add("superplain");
      }

      outer.appendChild(item);
    }
    this.appendChild(outer);
  }
}

customElements.define("wc-tag", WcTag);
