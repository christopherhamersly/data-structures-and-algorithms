


class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }
  preOrder() {

    const output = [];
    function _preOrder(root) {
      if(!root) {
        return;
      }
      output.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);
    }
    _preOrder(this.root);
    return output;
  }

  inOrder() {

    const output = [];
    function _inOrder(root) {
      if(!root) {
        return;
      }
      _inOrder(root.left);
      output.push(root.value);
      _inOrder(root.right);
    }
    _inOrder(this.root);
    return output;
  }

  postOrder() {
    const output = [];
    function _postOrder(root) {
      if(!root) {
        return;
      }
      _postOrder(root.left);
      _postOrder(root.right);
      output.push(root.value);
    }
    _postOrder(this.root);
    return output;
  }

}




// const applesNode = new Node('apples');
// const bananasNode = new Node('bananas');
// const cucumbersNode = new Node('cucumbers');

// applesNode.left = bananasNode;
// applesNode.right = cucumbersNode;

const applesNode = new Node('apples', new Node('bananas'), new Node('cucumbers'));

const tree = new BinaryTree(applesNode);

const results = tree.preOrder();

console.log(results);


class BinarySearchTree extends BinaryTree {

  add(value) {

    let newValue = new Node(value);

    while (this.left || this.right) {
      if (this.root === null) {
        this.root = newValue;
      }
      if (newValue.value < this.root) {
        this.root = this.root.left;
      }
      if (newValue.value > this.root) {
        this.root = this.root.right;
      }
      return newValue
    }

  }

  contains(value) {

    while(this.root) {
      if(this.root === value)
        return true;
      if (value > this.root) {
        this.root = this.right;
      } else if (value < this.root) {
        this.root = this.left;
      } else {
        return false
      }
    }
  }
}


module.exports = {BinarySearchTree, Node};



