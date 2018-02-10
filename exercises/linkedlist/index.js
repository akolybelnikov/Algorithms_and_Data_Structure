// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
         this.head = new Node(data, this.head);
        // this.insertAt(data, 0);
    }

    size() {
        let length = 0;
        let node = this.head;            
        while (node) {
            node = node.next;
            length++;
        }        
        return length;
    }

    getFirst() {
         return this.head;
       //  return this.getAt(0);
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;            
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }        

    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) return;

        this.head = this.head.next;
    }

    removeLast() {
        if (this.head) {
            if (!this.head.next) {
                this.head = null;
                return;
            }

            let prev = this.head;
            let node = this.head.next;

            while (node.next) {
                prev = node;
                node = node.next;
            }

            prev.next = null;
            return;

        } else return;
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;

        } else {

            let prevNode = this.getAt(index - 1);
            if (!prevNode || !prevNode.next) {
                return;
            }
            prevNode.next = prevNode.next.next;

        }       

        return null;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // if (index > this.size() + 1) {
        //     this.insertLast(data);
        //     return;
        // }

        const node = this.getAt(index - 1) || this.getLast();
        const newNode = new Node(data, node.next);
        node.next = newNode;
    }

    forEach(fn) {

        let node = this.head;

        while (node) {
            fn(node);
            node = node.next;
        }
        return;
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };

// function *numbers() {
//     const result = 1 + 1;
//     return 20 + (yield result);
// }

// const generator = numbers();
// generator.next();


// function *numbers() {
//     yield 1;
//     yield 2;
//     yield* moreNumbers();
//     yield 6;
//     yield 7;
// }

// function *moreNumbers() {
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const generator = numbers();

// const values = [];

// for (let value of generator) {
//     values.push(value);
// }
// values;

// class Tree {
//     constructor(value = null, children = []) {
//         this.value = value;
//         this.children = children;
//     }

//     *printValues() {
//         yield this.value;
//         for (let child of this.children) {
//             yield* child.printValues();
//         }
//     }
// }

// const tree = new Tree(1, [
//     new Tree(2, [new Tree(4)]),
//     new Tree(3)
// ]);

// const treeValues = [];
// for (let value of tree.printValues()) {
//     treeValues.push(value);
// }

// tree;
