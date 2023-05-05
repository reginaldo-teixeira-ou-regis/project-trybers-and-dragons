import Race from './Race';

export default class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private static readonly _maxInstances: number = 1;
  private readonly _maxLifePoints: number = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}
