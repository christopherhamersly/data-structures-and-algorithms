'use strict';

const AnimalShelter = require('./fifo_animal_shelter.js');
const Animal = require('./fifo_animal_shelter.js');
const Cat = require('./fifo_animal_shelter.js');
const Dog = require('./fifo_animal_shelter.js');

describe ('We are testing Animal shelter against a bunch (hopefully) of functions', () => {

  it('should be able to enqueue either cats or dogs', () => {
    let cat = new Cat;
    let weEnqueue = new AnimalShelter;
    let dog = new Dog;
    let holdingList = b [];

    weEnqueue.enqueue((cat), holdingList);
    weEnqueue.enqueue((dog), holdingList);

    console.log( 'what is in the holding list?', holdingList)

    expect(holdingList).toEqual(dog, cat);

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











})

