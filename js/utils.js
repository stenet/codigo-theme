export default class Utils {
    constructor() { }
    static getElementHeight(el) {
        if (el.offsetHeight) {
            return el.offsetHeight;
        }
        const oldStyle = {
            position: el.style.position,
            top: el.style.top,
            width: el.style.width,
            height: el.style.height,
            visibility: el.style.visibility,
            display: el.style.display
        };
        const newStyle = {
            position: "absolute",
            top: "-1000px",
            height: "",
            visibility: "hidden",
            width: `${el.offsetWidth}px`,
            display: ""
        };
        Object.assign(el.style, newStyle);
        const height = el.offsetHeight;
        Object.assign(el.style, oldStyle);
        return height;
    }
    static attachCommonStyles(node) {
        window.document.head
            .querySelectorAll("link")
            .forEach(link => {
            if (link.rel != "stylesheet") {
                return;
            }
            if (!Utils.linkArr.some(l => link.href.indexOf(l) >= 0)) {
                return;
            }
            const newLink = document.createElement("link");
            newLink.rel = link.rel;
            newLink.href = link.href;
            newLink.type = link.type;
            node.appendChild(newLink);
        });
    }
}
Utils.linkArr = [
    "/font-awesome/",
    "/codigo-theme/"
];
