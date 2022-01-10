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

    this.head.style.left = value + 'px';
  }

  set Y(value: number) {
    if (this.Y === value) return;

    if (value < 0 || value > 290) {
      // 进入判断说明蛇撞墙了，抛出一个异常
      throw new Error('蛇撞墙了！');
    }

    this.head.style.top = value + 'px';
  }

  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }
}

export default Snake;
