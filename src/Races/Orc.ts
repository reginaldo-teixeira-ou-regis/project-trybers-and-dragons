import Race from './Race';

export default class Orc extends Race {
  private static _createdRacesInstances = 0;
  private static readonly _maxInstances: number = 2;
  private readonly _maxLifePoints: number = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}
