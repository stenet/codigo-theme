export class AnimateUtils {
  constructor() {}

  static async animate(options: IAnimateOptions | IAnimateOptions[]) {
    if (!Array.isArray(options)) {
      options = [options];
    }

    const promises: Promise<void>[] = [];

    options.forEach(item => {
      if (item.before) {
        Object.assign(item.element.style, item.before);
      }

    });

    options.forEach(item => {
      const delay = item.delay == undefined
        ? 0
        : item.delay;
      
      if (delay == 0) {
        promises.push(AnimateUtils.animateSingle(item));
      } else {
        promises.push(new Promise((resolve) => {
          setTimeout(async () => {
            await AnimateUtils.animateSingle(item);
            resolve();
          }, delay);
        }));
      }
    });

    return Promise.all(promises);
  }
  private static async animateSingle(options: IAnimateOptions) {
    if (options.duration == undefined) {
      options.duration = 200;
    }

    if (options.duration > 0) {
      const animation = options.element.animate([options.animate], {
        easing: "ease-in",
        duration: options.duration
      });
  
      await animation.finished;
    }

    const after = Object.assign({}, options.animate, options.after || {});
    if (Object.getOwnPropertyNames(after).length > 0) {
      Object.assign(options.element.style, after);
    }
  }
}

export interface IAnimateOptions {
  element: HTMLElement;
  before?: any;
  animate?: any;
  after?: any;
  delay?: number;
  duration?: number;
}