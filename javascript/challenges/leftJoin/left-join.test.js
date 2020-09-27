'use strict';

const Hashtable = require('../hastable/hashtable.js');
const leftJoin = require('./left-join.js');

describe('we are testing a left join function' , () => {

  it('should return matching values if the key is returned', () => {
    const synonyms = {
      'anger':'wrath',
      'glee':'happiness'
    }
    
    const antonyms = {
      'anger':'amity',
      'full':'empty',
    }
    expect(leftJoin(synonyms, antonyms).toBe('anger':'wrath', "amity", 'glee':'happiness', 'null'))
  })

  it('should return null if values are not in the right away', () => {

  })

  it('should return the correct values', () => {

  })
})
