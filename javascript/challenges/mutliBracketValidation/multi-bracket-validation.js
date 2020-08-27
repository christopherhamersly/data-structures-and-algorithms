'use strict';

function isProperPair(opener, closer) {
  switch(opener) {
  case '[' :
    return closer === ']';
  case '{' :
    return closer === '}';
  case '(' :
    return closer === ')';
  }
  return false;
}

function multiBracketValidation(str) {

  if(!str) {
    return false;
  }
  const openers = '{(['
  const closers = '})]'
  let stack = [];

  for (let i = 0; i< str.length; i++) {
    let currentChar = str[i];
    if(openers.includes(currentChar)) {
      stack.push(currentChar);
    } else if (closers.includes(currentChar)) {
      const poppedChar = stack.pop();

      if(!isProperPair(poppedChar, currentChar)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = multiBracketValidation;

