import Race from './Race';

export default class Elf extends Race {
  private static _createdRacesInstances = 0;
  private static readonly _maxInstances: number = 3;
  private readonly _maxLifePoints: number = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}
