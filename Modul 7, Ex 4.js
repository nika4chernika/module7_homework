function ElectricalAppliance(name){
    this.place = 'living room',
    this.name = name,
    this.turneState = false
}
  
ElectricalAppliance.prototype.turnedOn = function(){
      this.turneState = true;
      console.log(`Your ${this.name} is turned on`);
}
  
ElectricalAppliance.prototype.turnedOff = function(){
      this.turneState = false;
      console.log(`Your ${this.name} is turned off`);
}
  
function Computer(name, power, size) {
    this.name = name,
    this.power = power,
    this.size = size
}
  
Computer.prototype = new ElectricalAppliance();
  
Computer.prototype.getinfo = function() {
    console.log(`The size of your ${this.name} is ${this.size}`)
}
  
function Lamp(name, power, color) {
    this.name = name,
    this.power = power,
    this.color = color
}
  
Lamp.prototype = new ElectricalAppliance();
  
Lamp.prototype.getinfo = function() {
    console.log(`Your ${this.name} is ${this.color}`)
}
  
const computer = new Computer('Computer', 180, 'medium');
const lamp = new Lamp('Lamp', 40, 'black');
  
  
function powerCheck(device){
      let totalPower = 0;
      device.forEach(element => {
          if(element.turneState) {
            totalPower = totalPower + element.power;
          }
        });
        return `Total power of turned on devices = ${totalPower} W`
}
  
  
lamp.turnedOn()
computer.turnedOn()
console.log(powerCheck([lamp,computer]));
  
  
lamp.turnedOff()
console.log(powerCheck([lamp,computer]));
  
  