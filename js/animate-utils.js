var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class AnimateUtils {
    constructor() { }
    static animate(el, options, duration = 200) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.before) {
                Object.assign(el.style, options.before);
            }
            const animation = el.animate([options.animate], {
                easing: "ease-in",
                duration: duration
            });
            yield animation.finished;
            const after = Object.assign({}, options.animate, options.after || {});
            if (Object.getOwnPropertyNames(after).length > 0) {
                Object.assign(el.style, after);
            }
        });
    }
}
