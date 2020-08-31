'use strict';

const AnimalShelter = require('./fifo_animal_shelter.js');
const Animal = require('./fifo_animal_shelter.js');
const Cat = require('./fifo_animal_shelter.js');
const Dog = require('./fifo_animal_shelter.js');

describe ('We are testing Animal shelter against a bunch (hopefully) of functions', () => {

  it('should be able to enqueue either cats or dogs', () => {
    let cat = new Cat;
    let dog = new Dog;
    let holdingList =  [cat, cat];
    expect(enqueue(cat, dog)(holdingList))).toBe(dog, cat);

  })

  it('should be able to enqueue onto an empty list', () => {
    let cat = new Cat
    let dog = new Dog;
  })

  it('should be able to enqueue a cat onto a list', () => {
    let cat = new Cat
    let dog = new Dog;
  })

  it('should be able to enqueue a dog onto a list', () => {
  
  })

  it('should be able to dequeue a dog from a list', () => {
  
  })

  it('should be able to dequeue a cat from a list', () => {
  
  })

  it('should be able to return null if an preference other than cat or dog is passed into the list', () => {
  
  })

  it('should be able to return null if a list is empty', () => {
  
  })


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
  








})

