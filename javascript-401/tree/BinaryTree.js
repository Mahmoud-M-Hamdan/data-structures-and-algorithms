"use strict";

const Node = require("./Node");
const Queue = require("../stack-and-queue/Queue");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }


  
  preOrder() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // read
      preOrderArr.push(node.value);
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
    };

    _walk(this.root);

    return preOrderArr;
  }
  /**
   *
   * In Order: : left -> Read -> Right
   */

  inOrder() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // read
      preOrderArr.push(node.value);
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
    };

    _walk(this.root);

    return preOrderArr;
  }

  /**
   *
   * Post-Order: Left -> Right -> Read
   */

  postOrder() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
      // read
      preOrderArr.push(node.value);
    };

    _walk(this.root);

    return preOrderArr;
  }

  maximumValue() {
    if (!this.root) {
      return null;
    }

    let maximumValue = 0;

    const _walk = (node) => {
      if (node.value > maximumValue) {
        maximumValue = node.value;
      }

      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
    };

    _walk(this.root);

    return maximumValue;
  }


  pre() {
    if (!this.root) {
      return "Binary tree is empty";
    }

    let preOrderArr = [];

    const _walk = (node) => {
      // read
      preOrderArr.push(node.value);
      // check left
      if (node.leftChild) {
        _walk(node.leftChild);
      }
      // check right
      if (node.rightChild) {
        _walk(node.rightChild);
      }
    };

    _walk(this.root);

    return preOrderArr;
  }


  breadthFirst() {
    let breadthQueue = new Queue();
  
    if (!this.root) {
      return "The tree is empty";
    }
  
    breadthQueue.enqueue(this.root);
  
    let breadthFirstArr = [];
  
    while (breadthQueue.peek()) {
      let front = breadthQueue.dequeue();
  
      breadthFirstArr.push(front.value);
  
      if (front.leftChild) {
        breadthQueue.enqueue(front.leftChild);
      }
  
      if (front.rightChild) {
        breadthQueue.enqueue(front.rightChild);
      }
    }
  
    return breadthFirstArr;
  }

}

module.exports = BinaryTree;