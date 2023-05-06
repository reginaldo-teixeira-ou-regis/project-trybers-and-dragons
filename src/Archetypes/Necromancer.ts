import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Necromancer._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdArchetypeInstances;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;