class Snake {
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.head.offsetLeft;
  }

  // 获取蛇的Y轴坐标
  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    if (this.X === value) return;

    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error('蛇撞墙了！');
    }

    // 修改x时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      // 如果发生了掉头，让蛇向反方向继续移动
      if (value > this.X) {
        // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
        value = this.X - 10;
      } else {
        // 向左走
        value = this.X + 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    if (this.Y === value) return;

    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了，抛出一个异常
      throw new Error('蛇撞墙了！');
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10;
      } else {
        value = this.Y + 10;
      }
    }

    this.moveBody();
    this.head.style.top = value + 'px';
  }

  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  moveBody() {
    /*
     *   将后边的身体设置为前边身体的位置
     *       举例子：
     *           第4节 = 第3节的位置
     *           第3节 = 第2节的位置
     *           第2节 = 蛇头的位置
     * */
    // 遍历获取所有的身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}

export default Snake;
