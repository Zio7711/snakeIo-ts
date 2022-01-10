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
    this.moveBody();
    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    if (this.Y === value) return;

    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了，抛出一个异常
      throw new Error('蛇撞墙了！');
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
