'use strict';

const ListNode = require('./listNode.js');

class ListBasedOnArray extends Array {
  append(data) {
    const node = new ListNode(data);
    this.push(node);
  }

  getLength() {
    return this.length;
  }

  print() {
    const output = [];
    for (const node of this) {
      output.push(`${this.indexOf(node)} - ${node.data};`);
    }
    console.log(output);
  }

  insert(data, ind) {
    if (ind < 0 || ind > this.length) throw new Error('Invalid index');
    const node = new ListNode(data);
    this.splice(ind, 0, node);
  }

  delete(ind) {
    if (ind < 0 || ind > this.length) throw new Error('Invalid index');
    const toDelete = this.get(ind);
    this.splice(ind, 1);
    return toDelete;
  }

  deleteAll(data) {
    for (let i = 0; i < this.length; i++) {
      if (this[i].data === data) {
        this.splice(i, 1);
        i--;
      }
    }
  }

  get(ind) {
    if (ind < 0 || ind > this.length) throw new Error('Invalid index');
    return this[ind].data;
  }

  clone() {
    const clone = new ListBasedOnArray();
    for (const node of this) {
      clone.append(node.data);
    }
    return clone;
  }

  reverse() {
    super.reverse();
  }

  findFirst(data) {
    let nodeToFind;
    for (const node of this) {
      if (node.data === data) {
        nodeToFind = node;
        break;
      }
    }
    return !!nodeToFind ? this.indexOf(nodeToFind) : -1;
  }

  findLast(data) {
    let nodeToFind;
    for (const node of this) {
      if (node.data === data) nodeToFind = node;
    }
    return !!nodeToFind ? this.lastIndexOf(nodeToFind) : -1;
  }

  clear() {
    while (this.length > 0) {
      this.pop();
    }
  }

  extend(list) {
    for (const node of list) {
      this.append(node.data);
    }
  }
}

module.exports = ListBasedOnArray;
