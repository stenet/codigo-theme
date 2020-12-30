export default class AnimateUtils {
  constructor() {}

  static async animate(el: HTMLElement, options: IAnimateOptions, duration = 200) {
    if (options.before) {
      Object.assign(el.style, options.before);
    }

    if (duration > 0) {
      const animation = el.animate([options.animate], {
        easing: "ease-in",
        duration: duration
      });
  
      await animation.finished;
    }

    const after = Object.assign({}, options.animate, options.after || {});
    if (Object.getOwnPropertyNames(after).length > 0) {
      Object.assign(el.style, after);
    }
  }
}

interface IAnimateOptions {
  before?: any;
  animate?: any;
  after?: any;
}