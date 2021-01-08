class WcInclude extends HTMLElement {
  private _Href: string | undefined | null;

  constructor() {
    super();

    this.attachShadow({mode: "open"});
  }

  async connectedCallback() {
    this._Href = this.getAttribute("include-href");
    if (!this._Href) {
      return;
    }

    const loadingContent = this.createLoadingContent();
    this.shadowRoot!.appendChild(loadingContent);

    let response: Response | null;
    try {
      response = await fetch(this._Href);    
    } catch {
      response = null;
    }

    const content = document.createElement("div");

    if (!response || response!.status != 200) {
      const errorText = response
        ? response!.statusText
        : "unbekannt";

      content.style.fontWeight = "bold";
      content.style.color = "var(--red)";
      content.innerText = `${this._Href} konnte nicht abgerufen werden. Fehler-Code: ${errorText}`;
    } else {
      const html = await response.text();
      content.innerHTML = html;
  
      this.parseLinks(content, "link", "href");
      this.parseLinks(content, "script", "src");
      this.parseLinks(content, "img", "src");
      this.recreateScripts(content);
    }

    content.style.display = "none";
    this.shadowRoot!.appendChild(content);

    setTimeout(() => {
      this.shadowRoot!.removeChild(loadingContent);
      content.style.display = "";
    }, 300);
  }

  private createLoadingContent() {
    const content = document.createElement("div");
    content.style.fontWeight = "bold";
    content.innerText = "Inhalt werden geladen...";

    return content;
  }
  private parseLinks(content: HTMLElement, tagName: string, attributeName: string) {
    content.querySelectorAll(`${tagName}[${attributeName}]`)
      .forEach((el) => {
        const link = el.getAttribute(attributeName);
        if (!link) {
          return;
        }

        if (link.startsWith("http")) {
          return;
        }

        el.setAttribute(attributeName, `${this._Href!}${link}`);
      });
  }
  private recreateScripts(content: HTMLElement) {
    const scripts = Array.from(content.querySelectorAll("script"));

    scripts.forEach(script => {
      const parent = script.parentElement!;
      parent.removeChild(script);

      const newScript = document.createElement("script");
      newScript.type = script.type;
      newScript.src = script.src;
      parent.appendChild(newScript);
    });
  }
}

customElements.define("wc-include", WcInclude);
