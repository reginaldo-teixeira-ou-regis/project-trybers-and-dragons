import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private player1: Fighter, 
    private player2: SimpleFighter[],
  ) {
    super(player1);
  }

  fight(): number {
    for (let i = 100; i > -1; i -= 1) {
      this.player2.forEach((el) => {
        this.player1.attack(el);
        el.attack(this.player1);
        if (this.player1.lifePoints <= -1 || el.lifePoints <= -1) {
          i = -2;
        }
      });
    }
    return super.fight();
  }
} 