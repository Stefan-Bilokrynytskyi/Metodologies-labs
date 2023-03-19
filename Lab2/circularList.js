'use strict';

const ListNode = require('./listNode.js');

class CircularList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    let newNode = new ListNode(data);

    let tmp = this.head;
    if (tmp) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    } else {
      newNode.next = newNode;
      this.head = newNode;
      this.tail = newNode;
    }
    return;
  }

  length() {
    if (!this.head) return 0;
    let length = 0;
    let tmp = this.head;
    while (tmp.next !== this.head) {
      length++;
      tmp = tmp.next;
    }

    return ++length;
  }

  print() {
    let tmp = this.head;
    while (tmp.next !== this.head) {
      console.log(tmp.data);
      tmp = tmp.next;
    }
    console.log(tmp.data);
  }

  insert(data, ind) {
    if (this.length() - 1 < ind || 0 > ind) throw new Error('invalid index');
    let indOfList = 0;
    let newNode = new ListNode(data);
    let tmp = this.head;
    if (ind === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    } else {
      while (indOfList++ !== ind - 1) {
        tmp = tmp.next;
      }
      newNode.next = tmp.next;
      tmp.next = newNode;
    }
  }
}

const list = new CircularList();

list.append('a');

list.append('b');
list.append('c');
list.insert('g', 0);
list.insert('g', 2);
list.insert('g', 4);
list.print();
//list.insert("g", 5);
