let MicroApp: Partial<typeof window.microApp> = (function (window) {
  if (window && window.microApp) {
    return window.microApp;
  } else return {};
})(window);

export default MicroApp;
