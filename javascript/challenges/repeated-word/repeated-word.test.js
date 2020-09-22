'use strict';

const Hashtable = require('./repeated-word');


describe('testing out repeating words from strings', () => {

  test('it should return the first repeated word in a string' , () => {

    let testHashtable = new Hashtable(256);

    let string = 'it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'

   

    expect((testHashtable.findFirstMatch(string)).toEqual('it'));
  })

  test('it should return the first repeated word in a string' , () => {

    let testHashtable = new Hashtable(256);

    let string = '?Welcome, to ! the end to you'

   
    expect((testHashtable.findFirstMatch(string)).toEqual('to'));
  })
})
