function cursorFlashing(DOM, stopCount = 0, endCallback) {
  let _count = 0;
  let timer = setInterval(() => {
    if (_count <= stopCount) {
      if (DOM.classList.contains("cursor-show")) {
        DOM.classList.remove("cursor-show");
      } else {
        DOM.classList.add("cursor-show");
        _count++;
      }
    } else {
      DOM.classList.remove("cursor-show");
      clearInterval(timer);
      endCallback();
    }
  }, 300);
}

export function typewriter(DOM, content, endCallback) {
  // Add cursor to DOM
  DOM.classList.add("cursor-show");
  let contentArr = Array.from(content);
  let timer = setInterval(() => {
    if (contentArr.length === 0) {
      clearInterval(timer);
      cursorFlashing(DOM, 4, endCallback);
    } else {
      DOM.innerHTML += contentArr.shift();
    }
  }, 150);
}