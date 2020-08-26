'use strict';

class Animal {
  constructor(name){
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name){
    super(name);
    this.type = 'dog';
  }
}

class Cat extends Animal {
  constructor(name){
    super(name);
    this.type = 'cat';
  }
}

class AnimalShelter {
  constructor(){
    this.storage = [];
  }
  enqueue(animal){
    this.storage.push(animal);

  }

  dequeue(pref){
    if(!pref){
      let toReturn = this.storage[0];
      this.storage.shift();
      return toReturn;
    }else if(pref !== 'dog' && pref !== 'cat' || this.storage.length === 0){
      return null;
    }else{
      for(let i=0; i< this.storage.length; i++){
        if(pref === this.storage[i].type){
          let toReturn2 = this.storage[i];

          this.storage.splice(i,1);
          return toReturn2;
        }
      }
      return `There is no ${pref} in our shelter`;
    }
  }


}



module.exports = Cat;
module.exports = Dog;
module.exports = Animal;
module.exports = AnimalShelter;

