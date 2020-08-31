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

function multiBracketValidation(string) {

  if(!string) {
    return false;
  }
  const openers = '{(['
  const closers = '})]'
  let stack = [];

  for (let i = 0; i< string.length; i++) {
    let currentChar = string[i];
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


describe ('We are testing multiBracket Validation in a few different ways', () => {

  it('should return true given this following argument', () => {

    let string = '{}'

    expect(multiBracketValidation(string)).toBe(true);
  });

  it('should return false given this following argument', () => {

    let string = '{]';

    expect(multiBracketValidation(string)).toBe(false);
  });

  it('should return false given this following argument', () => {

    let string = '{{]}';

    expect(multiBracketValidation(string)).toBe(false);
  });

  it('should return true given this following argument', () => {

    let string = '{[]}'

    expect(multiBracketValidation(string)).toBe(true);
  });

  it('should return true given this following argument', () => {

    let string = '{[hello from the test]}'

    expect(multiBracketValidation(string)).toBe(true);
  });

  it('should return false given this following argument', () => {

    let string = '{[hello from the test}'

    expect(multiBracketValidation(string)).toBe(false);
  });







});
