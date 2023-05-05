import Race from './Race';

export default class Halfling extends Race {
  private static _createdRacesInstances = 0;
  private static readonly _maxInstances: number = 2;
  private readonly _maxLifePoints: number = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}
