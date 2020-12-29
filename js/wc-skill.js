class WcSkill extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        document.addEventListener("DOMContentLoaded", () => this.render());
    }
    render() {
        var _a;
        const skillLevel = parseInt((_a = this.getAttribute("skill-level")) !== null && _a !== void 0 ? _a : "100");
        const skillColor = skillLevel <= 50
            ? "var(--red)"
            : skillLevel <= 70
                ? "var(--yellow)"
                : "var(--green)";
        const outer = document.createElement("div");
        outer.classList.add("text-white", "p-2", "space-y-2", "space-x-2", "text-sm", "border", "leading-tight");
        outer.style.background = `linear-gradient(90deg, ${skillColor} 0%, ${skillColor} ${skillLevel}%, white ${skillLevel}%)`;
        outer.style.borderColor = skillColor;
        while (this.childNodes.length > 0) {
            outer.appendChild(this.childNodes.item(0));
        }
        this.appendChild(outer);
    }
}
customElements.define("wc-skill", WcSkill);
export {};
