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
    if (!this.head) {
      console.log('The list is empty');
      return;
    }
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

  delete(ind) {
    if (this.length() - 1 < ind || 0 > ind) throw new Error('invalid index');
    if (this.length() === 1) {
      this.clear();
      return;
    }
    let indOfList = 0;
    let tmp = this.head;
    let deletedEl;

    if (ind === 0) {
      deletedEl = this.head;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      while (indOfList++ !== ind - 1) {
        tmp = tmp.next;
      }
      if (ind === this.length() - 1) this.tail = tmp;
      deletedEl = tmp.next;
      tmp.next = tmp.next.next;
    }
    return deletedEl.data;
  }

  deleteAll(el) {
    let indOfList = 0;
    let tmp = this.head;
    while (tmp.next !== this.head) {
      if (tmp.data === el) {
        this.delete(indOfList);
        indOfList = 0;
        tmp = this.head;
      } else {
        tmp = tmp.next;
        indOfList++;
      }
    }
    if (tmp.data === el) this.delete(indOfList);
    return;
  }

  get(ind) {
    if (this.length() - 1 < ind || 0 > ind) throw new Error('invalid index');
    let indOfList = 0;
    let tmp = this.head;
    while (indOfList++ !== ind) {
      tmp = tmp.next;
    }
    return tmp.data;
  }

  clone() {
    if (!this.head) return this;
    const newList = new CircularList();
    let tmp = this.head;
    while (tmp.next !== this.head) {
      newList.append(tmp.data);
      tmp = tmp.next;
    }
    newList.append(tmp.data);
    return newList;
  }

  reverse() {
    let prevNode = this.tail;
    let currNode = this.head;
    if (currNode === null) return;
    let nextNode;

    while (currNode.next !== this.head) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
      this.head = prevNode;
    }

    this.tail = currNode;
  }

  findFirst(data) {
    let indOfList = 0;
    let tmp = this.head;
    while (tmp.next !== this.head) {
      if (tmp.data === data) return indOfList;
      tmp = tmp.next;
      indOfList++;
    }
    if (tmp.data === data) return indOfList;
    else return -1;
  }

  findLast(data) {
    let indOfList = 0;
    let indLast;
    let tmp = this.head;
    while (tmp.next !== this.head) {
      if (tmp.data === data) indLast = indOfList;
      tmp = tmp.next;
      indOfList++;
    }
    if (tmp.data === data) indLast = indOfList;
    return indLast ? indLast : -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  extend(list) {
    if (!list.head) return this;
    const newList = list.clone();
    if (!this.head) {
      this.head = newList.head;
      this.tail = newList.tail;
    } else {
      this.tail.next = newList.head;
      newList.tail.next = this.head;
    }

    return;
  }
}

const list = new CircularList();
const list2 = new CircularList();

list2.append('g');
list2.append('g');
list2.append('g');
list.extend(list2);
list2.deleteAll('g');
console.log(list2.clone());
list.extend(list2);
list.print();
