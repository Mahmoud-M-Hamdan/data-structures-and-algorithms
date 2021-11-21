"use strict";

const BinaryTree = require("./BinaryTree");

const Node = require("./Node");

class BinarySearchTree extends BinaryTree {
  constructor(props) {
    super(props);
  }

  add(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }


    const _walk = (node) => {
      if (value < node.value) {
        if (node.leftChild) {
          _walk(node.leftChild);
        }
        if (!node.leftChild) {
          node.leftChild = newNode;
        }
      }

      if (value > node.value) {
        if (node.rightChild) {
          _walk(node.rightChild);
        }
        if (!node.rightChild) {
          node.rightChild = newNode;
        }
      }
    };

    _walk(this.root);
  }

  contains(value) {
    let treeValues = this.preOrder();

    return treeValues.includes(value);
  }
}

module.exports = BinarySearchTree;