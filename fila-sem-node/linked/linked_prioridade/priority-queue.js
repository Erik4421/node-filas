class Node {
    constructor(value, priority, next = null) {
        this.value = value
        this.priority = priority
        this.next = next
    }
}

class PriorityQueue {
    constructor() {
        this._front = null
        this._tail = null
        this._size = 0
    }

    isEmpty() {
        return this._size === 0
    }

    enqueue(value, priority) {
        const node = new Node(value, priority)
        if (this.isEmpty()) {
            this._front = node
            this._tail = node
        } else if (node.priority < this._front.priority) {
            node.next = this._front
            this._front = node
        } else {
            let temp = this._front
            while (temp.next !== null && temp.priority <= node.priority) {
                temp = temp.next
            }
            node.next = temp.next
            temp.next = node 

            if (node.next === null) {
                this._tail = node
            }
        }
        this._size++
    }

    print() {
        let temp = this._front
        while (temp !== null) {
            console.log(temp)
            temp = temp.next
        }
    }
}

const pqueue = new PriorityQueue()
pqueue.enqueue("Maria", 0)
pqueue.enqueue("João", 0)
pqueue.enqueue("Pedro", 2)
pqueue.enqueue("Paulo", 2)
pqueue.enqueue("Peter", 2)
pqueue.enqueue("Ryan", 1)
pqueue.enqueue("Jhon", 4)
pqueue.enqueue("Flavio", 4)
pqueue.enqueue("Ryan", 3)
pqueue.print()