"use strict";

const BinarySearchTree = require("./BinarySearchTree");

const BinaryTree = require("./BinaryTree");

// const BinaryTree = require("./BinaryTree");

const Node = require("./Node");

const newBinarySearchTree = new BinarySearchTree();

const newBinaryTree = new BinaryTree();

newBinaryTree.root = new Node(
  120,
  new Node(7, new Node(18), new Node(20)),
  new Node(15, new Node(100), new Node(50))
);

newBinarySearchTree.root = new Node(
  10,
  new Node(5, new Node(3), new Node(6)),
  new Node(15, new Node(14), new Node(18))
);



