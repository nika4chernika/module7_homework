class ElectricalAppliance {
    constructor(name, power) {
       this.place = 'living room',
        this.name = name,
        this.turneState = false,
        this.power = power
    }

    getPower() {
        return this.turneState ? this.power : 0;
    }

    stateCheck() {
        this.turneState = !this.turneState
   }

    getInfo() {
        return `Your ${this.name} is turned ${this.turneState ? 'on' : 'off'}, current power is: ${this.getPower()} W`
    }

}

class Computer extends ElectricalAppliance {
    constructor (name, power, size) {
        this.name = name,
        this.power = power,
        this.size = size
    }
}

class Lamp extends ElectricalAppliance {
    constructor (name, power, color) {
        this.name = name,
        this.power = power,
        this.color = color
    }
}

function powerSum(arr) {
    let result = 0
    arr.forEach((item) => {
       result += item.getPower()
    })
    return result;
}

const computer = new Computer('Computer', 180, 'medium');
const lamp = new Lamp('Lamp', 40, 'black');
  


computer.getInfo()
computer.stateCheck()
computer.getInfo()

lamp.getInfo()
lamp.stateCheck()
lamp.getInfo()


console.log(`Total power of turned on devices = ${powerSum([computer, lamp])} w`)

