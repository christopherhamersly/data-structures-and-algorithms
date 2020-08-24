const Stack = require('./stacks-and-queues.js');
const Queue = require('./stacks-and-queues.js');

it('should be a class', () => {
  expect(Stack).toBeDefined();
});

it('should instantiate an empty stack', () => {
  const stack = new Stack();
  expect(stack).toBeDefined();
  // ? check if empty
});

it('Can successfully pop off the stack', () => {

  const stack = new Stack();

  stack.push('apples');
  stack.push('bananas');

  const popped = stack.pop();
  expect(popped).toBe('bananas');

  stack.pop();

  expect(stack.isEmpty()).toBeTruthy();
});

it('Can successfully push onto a stack', () => {

  const stack = new Stack();

  stack.push('apples');

  expect(stack.peek()).toBe('apples');

});

it('should check if is not empty', () => {

  const stack = new Stack();

  stack.push('apples');

  expect(stack.isEmpty()).toBeFalsy();

});

it('should check if is empty', () => {

  const stack = new Stack();

  expect(stack.isEmpty()).toBeTruthy();

});

it('should not allow pop from empty list', () => {

  const stack = new Stack();

  expect(() => stack.pop()).toThrow(RangeError);
  expect(() => stack.pop()).toThrow('Cannot pop off empty stack');

});

it('should not allow peek from empty list', () => {

  const stack = new Stack();

  expect(() => stack.peek()).toThrow(RangeError);
  expect(() => stack.peek()).toThrow('Cannot peek empty stack');

});

const queue = new Queue;

//Can successfully enqueue into a queue
it('can successfully enqueue into a queue', () => {
  queue.enqueue('apples');
  expect(queue).toEqual({'storage':['apples']});
})

//Can successfully enqueue multiple values into a queue
it('should successfully enqueue mulitple values into a queue', () => {
  const queue = new Queue;
  queue.enqueue('apples');
  queue.enqueue('bananas');
  queue.enqueue('carrots');
  expect(queue).toEqual({'storage': ['apples', 'bananas', 'carrots']});
});

//Can successfully dequeue out of a queue the expected value
it('should succesfully return a value from the queue', () => {
  let queue = new Queue;

  queue.enqueue('apples')
  queue.enqueue('bananas')
  queue.enqueue('carrots')
  expect(queue.peek()).toBe('apples');
});


//Can successfully peek into a queue, seeing the expected value
it('should see peek the value in the queue', () => {
  const queue = new Queue;

  queue.enqueue('apples');
  expect(queue).toEqual({'storage': ['apples']});
});
//Can successfully empty a queue after multiple dequeues

//Can successfully instantiate an empty queue
it('should instantiate an empty queue', () => {
  const stack = new Queue();
  expect(stack).toBeDefined();
})

//Calling dequeue or peek on empty queue raises exception
it('should not allow dequeue or peek from empty list', () => {

  const queue = new Queue();

  expect(() => queue.dequeue()).toThrow(RangeError);
  expect(() => queue.dequeue()).toThrow('Cannot dequeue empty queue');

  expect(() => queue.peek()).toThrow(RangeError);
  expect(() => queue.peek()).toThrow('Cannot peek empty queue');

});
