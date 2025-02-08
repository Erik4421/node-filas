import {Queue} from "./classe.js"

const queue = new Queue()

const buttonEnqueue = document.querySelector("#enqueue");
const buttonDequeue = document.querySelector("#dequeue");
const buttonFront = document.querySelector("#front");
const buttonRear = document.querySelector("#rear");
const buttonIsEmpty = document.querySelector("#isEmpty");
const buttonSize = document.querySelector("#size");

buttonEnqueue.addEventListener("click", () => enqueue());
buttonDequeue.addEventListener("click", () => dequeue());
buttonFront.addEventListener("click", () => front());
buttonRear.addEventListener("click", () => rear());
buttonIsEmpty.addEventListener("click", () => isEmpty());
buttonSize.addEventListener("click", () => size());

function enqueue() {
    let value = document.getElementById("element").value;
    
    if (value) {
        queue.enqueue(value)
        updateMyArray();
    }
}

function dequeue() {
    queue.dequeue()
    updateMyArray()
}

function front() {
    document.getElementById("message").innerHTML = queue.front()    
    
}
function rear() {
    document.getElementById("message").innerHTML = queue.rear()    
}

function isEmpty() {
    document.getElementById("message").innerHTML = queue.isEmpty()    
}

function size() {
    document.getElementById("message").innerHTML = queue.size()        
}

function updateMyArray() {
    document.getElementById("lista").innerHTML = ""
    for (const i of queue.items) {
        document.getElementById("lista").innerHTML += `<div class="value_array">${i}</div>`
    }   
}