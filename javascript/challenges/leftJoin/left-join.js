'use strict';

function leftJoin(table1, table2) {

  let resultsArray = [];
  let resultsArrayTwo = [];

  table1.forEach(bucket => {

    resultsArray.push([bucket[0], bucket[1]]);

    table2.forEach(bucket => {
      resultsArrayTwo.push([bucket[0], bucket[1]])
    })

    for (let i = 0; i < resultsArray.length; i++) {
      if (resultsArrayTwo.includes(resultsArray[i])) {
        resultsArray.push(resultsArrayTwo[1])
      } else {
        return null;
      }

      return resultsArray;

    }
  })
}

module.exports = leftJoin
