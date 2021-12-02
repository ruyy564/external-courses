class ElectricalAppliance {
  constructor(name, pluggedIn, powerConsumption) {
    this.name = name;
    this.pluggedIn = pluggedIn;
    this.powerConsumption = powerConsumption;
  }
}

class Fridge extends ElectricalAppliance {
  constructor(name, pluggedIn, powerConsumption, volume) {
    super(name, pluggedIn, powerConsumption);
    this.volume = volume;
  }
}

class LightingFixture extends ElectricalAppliance {
  constructor(name, pluggedIn, powerConsumption, baseType) {
    super(name, pluggedIn, powerConsumption);
    this.baseType = baseType;
  }
}

class Room {
  constructor(...electricalAppliance) {
    this.electricalAppliance = electricalAppliance;
  }

  findElectricalApplianceByName(name) {
    for (let i = 0; i < this.electricalAppliance.length; i += 1) {
      if (this.electricalAppliance[i].name === name) {
        return this.electricalAppliance[i];
      }
    }

    return undefined;
  }

  calcPowerConsumption() {
    let powerConsumption = 0;

    for (let i = 0; i < this.electricalAppliance.length; i += 1) {
      if (this.electricalAppliance[i].pluggedIn) {
        powerConsumption += +this.electricalAppliance[i].powerConsumption;
      }
    }

    return powerConsumption;
  }
}

const fagus2 = new LightingFixture('Fagus-2', true, 50, 'E14');
const fagus5 = new LightingFixture('Fagus-5', true, 80, 'E27');
const atlant = new Fridge('ATLANT', true, 250, 40);
const room = new Room(fagus2, fagus5, atlant);

module.exports = room;
