import Race from './Race';

export default class Halfling extends Race {
  private readonly _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
