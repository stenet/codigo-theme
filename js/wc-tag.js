class WcTag extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        document.addEventListener("DOMContentLoaded", () => this.render());
    }
    render() {
        const tagColor = this.getAttribute("tag-color") || "var(--blue)";
        const outer = document.createElement("div");
        outer.classList.add("text-white", "px-2", "py-1", "mb-2", "inline-block", "rounded-xl", "text-sm", "leading-tight");
        outer.style.backgroundColor = tagColor;
        while (this.childNodes.length > 0) {
            outer.appendChild(this.childNodes.item(0));
        }
        this.appendChild(outer);
    }
}
customElements.define("wc-tag", WcTag);
export {};
