import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = '';
  isLive = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10, 2);

    this.init();
  }

  init() {
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    this.run();
  }

  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }

  run() {
    // 获取蛇现在坐标
    let X = this.snake.X;
    let Y = this.snake.Y;

    // 根据按键方向来修改X值和Y值
    switch (this.direction) {
      case 'ArrowUp':
        // 向上移动 top 减少
        Y -= 10;
        break;

      case 'ArrowDown':
        // 向下移动 top 增加
        Y += 10;
        break;

      case 'ArrowLeft':
        // 向左移动 left 减少
        X -= 10;
        break;

      case 'ArrowRight':
        // 向右移动 left 增加
        X += 10;
        break;
    }

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (error: any) {
      alert(error.message);
      this.isLive = false;
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
}

export default GameControl;
