class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }
    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count +=1
        return this.count - 1
    }

    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Get item from stack pointer
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check is stack empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty') 
        return this.count == 0
    } 
}

const stack = new Stack()


stack.isEmpty()
stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)


stack.pop()
stack.pop()
stack.isEmpty()