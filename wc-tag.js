class WcTag extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
  }

  connectedCallback() {
    const tagColor = this.getAttribute("tag-color");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          margin-bottom: 1rem;
        }
        :host > div {
          display: inline;
          padding: 0.5em 1em;
          border-radius: 2em;
          font-size: .8em;
          line-height: 1.2em;
          color: white;
          background-color: var(--primary-color);
        }
      </style>
      <div style="background-color: ${tagColor}">
        <slot></slot>
      </div>`;
  }
}

customElements.define("wc-tag", WcTag);