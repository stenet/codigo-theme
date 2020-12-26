class WcSkill extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    const skillLevel = this.getAttribute("skill-level");

    const skillColor = skillLevel <= 50
      ? "var(--red)"
      : skillLevel <= 70
        ? "var(--yellow)"
        : "var(--green)";

    this.shadowRoot.innerHTML = `
      <style>
        :host > div {
          border: 1px solid white;
          font-size: 0.8em;
          line-height: 1.2em;
          color: white;
          padding: 10px;
          margin-bottom: 1rem;
        }
      </style>
      <div style="background: linear-gradient(90deg, ${skillColor} 0%, ${skillColor} ${skillLevel}%, white ${skillLevel}%); border-color: ${skillColor};">
        <slot></slot>
      </div>`;
  }
}

customElements.define("wc-skill", WcSkill);