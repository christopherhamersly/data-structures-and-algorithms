'use strict';


function leftJoin(synonyms, antonyms){
  const output = []

  for(let key in synonyms) {
    const entry = [key, synonyms[key], 'NULL'];

    if(key in antonyms) {
      entry[2] = antonyms[key]
    }
    output.push(entry)
  }
  return output;

}



module.exports = leftJoin
