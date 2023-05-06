import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Warrior._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;