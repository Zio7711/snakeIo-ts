import './style.less';

class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物的位置
  change() {
    // 生成一个随机的位置
    // 食物的位置最小是0 最大是290
    // 蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10

    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

class ScorePanel {
  // score和level用来记录分数和等级
  score = 0;
  level = 1;

  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置一个变量限制等级
  maxLevel: number;
  // 设置一个变量表示多少分时升级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  //设置一个加分的方法
  addScore() {
    // 使分数自增
    this.scoreEle.innerHTML = ++this.score + '';
    // 判断分数是多少
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }

  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}
