

function Utils() {
}
// 计算鼠标在元素的相对位置
Utils.prototype = {
  // 鼠标位置相对于元素位置
  captureMouse: function (element) {
    let mouse = { x: 0, y: 0 };
    console.log(this)

    element.addEventListener('mousemove', (event) => {
      console
      let x, y;
      if (event.pageX || event.pageY) {
        x = event.pageX;
        y = event.pageY
      } else {
        x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop
      }
      // x -= element.offsetLeft;
      // y -= element.offsetTop

      x -= (this.getElementLeft(element) + this.getBorderWidth(element))
      y -= (this.getElementTop(element) + this.getBorderWidth(element))

      mouse.x = x;
      mouse.y = y;
    }, false)
    return mouse
  },
  getElementLeft: function (element) {
    let curLeft = element.offsetLeft;
    let current = element.offsetParent;


    while (current) {
      curLeft += current.offsetLeft;
      current = current.offsetParent
    }

    return curLeft
  },
  getElementTop: function (element) {
    let curTop = element.offsetTop;
    let current = element.offsetParent;


    while (current) {
      curTop += current.offsetTop;
      current = current.offsetParent
    }

    return curTop
  },

  // 获取各个层级的border宽度

  getBorderWidth: function (element) {
    let parent = element.offsetParent
    let offsetHeight = parent.offsetHeight;
    let clientHeight = parent.clientHeight;
    while (parent.offsetParent) {
      offsetHeight += parent.offsetParent.offsetHeight;
      clientHeight += parent.offsetParent.clientHeight;
      parent = parent.offsetParent
    }


    return (offsetHeight - clientHeight) / 2

  }
}