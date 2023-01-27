export abstract class Game {
  constructor(
    protected name: string,
    protected players: number,
    protected price: number
  ) {}

  play() {
    console.log(`Playing ${this.name} with ${this.players} players.`);
  }
}
