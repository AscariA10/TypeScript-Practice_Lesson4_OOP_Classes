// let doorState: 'open' | 'close';

class House {
   door: string;

   constructor(d: 'open' | 'close') {
      this.door = d;
   }

   showDoorStatus() {
      console.log(`Door is ${this.door}`);
   }
}

const building = new House('open');

console.log(building);
building.showDoorStatus();
