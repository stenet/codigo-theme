export class SwipeHandler {
  private _handlers: SwipeCallback[] = [];
  private _touchStartInfo: ITouchStartInfo | undefined;

  constructor() {
    this.registerEvents();
  }

  timeout = 500;
  threshold = 20;

  registerSwipe(callback: SwipeCallback) {
    this._handlers.push(callback);
  }

  private registerEvents() {
    document.addEventListener("touchstart", (e) => {
      this._touchStartInfo = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        date: Date.now()
      };
    });
    document.addEventListener("touchend", (e) => {
      if (!this._touchStartInfo) {
        return;
      }
      
      const touchStartInfo = this._touchStartInfo;
      this._touchStartInfo = undefined;

      const touches = e.changedTouches || e.touches || []
      if (touches.length == 0) {
        return;
      }

      const timeDiff = Date.now() - touchStartInfo.date;
      if (timeDiff > this.timeout) {
        return;
      }

      const xDiff = touchStartInfo.x - touches[0].clientX;
      const yDiff = touchStartInfo.y - touches[0].clientY;

      if (Math.abs(xDiff) < Math.abs(yDiff)) {
        return;
      } else if (Math.abs(xDiff) < this.threshold) {
        return;
      }

      const direction = xDiff < 0
        ? SwipeDirection.Right
        : SwipeDirection.Left;

      this._handlers.forEach(h => h(direction, touches[0].clientX, touches[0].clientY));
    });
  }
}

interface ITouchStartInfo {
  x: number;
  y: number;
  date: number;
}
export enum SwipeDirection {
  Left,
  Right
}
type SwipeCallback = (direction: SwipeDirection, x: number, y: number) => void;