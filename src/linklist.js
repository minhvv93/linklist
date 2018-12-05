"use strict";
class Node1 {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.len = 0;
    }
    add(value) {
        let node = new Node1(value);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.len++;
    }
    show(pos) {
        if (pos > -1 && pos < this.len) {
            let current = this.head;
            let index = 0;
            let previous;
            while (index++ < pos) {
                previous = current;
                current = current.next;
            }
            console.log(`${current.value}`);
        }
        else {
            return false;
        }
    }
    showall() {
        let current = this.head;
        let previous;
        let i = 0;
        while (i++ <= this.len) {
            previous = current;
            console.log(`${current.value}`);
            current = current.next;
        }
    }
}
class LinkedListExtend extends LinkedList {
    insert(value, pos) {
        if (pos > -1 && pos < this.len) {
            let node = new Node1(value);
            let current = this.head;
            let index = 0;
            let previous;
            if (pos === 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
        }
        else {
            return false;
        }
    }
    delete(pos) {
        if (pos > -1 && pos < this.len) {
            let current = this.head;
            let index = 0;
            let previous;
            while (index++ < pos) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        else {
            return false;
        }
    }
}
var list = new LinkedListExtend;
list.add(5);
list.add('hay hay');
list.add(6);
list.add(7);
list.insert(8, 2);
//list.delete(2);
console.log(list.show(1));
console.log(list.showall());
