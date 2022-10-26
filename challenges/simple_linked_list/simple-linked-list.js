class Element {
  constructor(datum, nextElement) {
    this.datumVal = datum;
    this.nextEl = nextElement;
  }

  datum() {
    return this.datumVal;
  }

  next() {
    return this.nextEl || null;
  }

  isTail() {
    return !this.next();
  }
}

class SimpleLinkedList {
  static fromArray(arr) {
    arr = arr || [];
    let sll = new SimpleLinkedList();
    [...arr].reverse().forEach((elem) => sll.push(elem));
    return sll;
  }

  head() {
    return this.headEl || null;
  }

  size() {
    let size = 0;
    let currElement = this.head();

    while (currElement) {
      size += 1;
      currElement = currElement.next();
    }

    return size;
  }

  isEmpty() {
    return !this.head();
  }

  push(datumVal) {
    let element = new Element(datumVal, this.head());
    this.headEl = element;
  }

  peek() {
    let head = this.head();
    return head ? head.datum() : null;
  }

  pop() {
    let datum = this.peek();
    let newHead = this.head().next();

    this.headEl = newHead;
    return datum;
  }

  toArray() {
    let arr = [];

    let currElement = this.head();

    while (currElement !== null) {
      arr.push(currElement.datum());
      currElement = currElement.next();
    }
    return arr;
  }

  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }
}

module.exports = { SimpleLinkedList, Element };
