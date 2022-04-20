
class Helper {
  /**
   * 防抖事件
   * @param type 事件名
   * @param name 新的事件名
   * @param obj 被挂载事件的对象
   */
  static throttleEvent(type, name, obj?: any) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  }
}

export default  Helper