// let doorState: 'open' | 'close';

class Key {
   private signature: number;

   constructor() {
      this.signature = Math.random();
   }

   getSignature(): number {
      return this.signature;
   }
}

class Person {
   name: string;
   constructor(n: string) {
      this.name = n;
   }
}

abstract class House {
   protected abstract door: 'open' | 'close';
   public myKey: number;

   constructor(key: Key) {
      this.myKey = key.getSignature();
   }
}
// tenants: any[];
// private tenant: {};

// houseKey = new Key('newKey');

// constructor(d: 'open' | 'close') {
//    this.door = d;
//    this.tenants = [];
//    this.tenant = {};
// }

// openDoor(): void {
//    console.log(`Door is ${this.door}`);
// }

// comeIn(newTenant: string): void {
//    if (this.door === 'closed') {
//       return;
//    }

//    this.tenant = new Person(newTenant);
//    this.tenants.push(this.tenant);
// }

// showAllTenants(): void {
//    console.log(this.tenants);
// }

// const building = new House('open');

// console.log(building);
// building.openDoor();
// building.comeIn('alex');
// building.comeIn('jack');
// building.comeIn('mary');
// building.showAllTenants();
