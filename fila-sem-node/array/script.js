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

let list = [];

function enqueue() {
    let value = document.getElementById("element").value;
    
    if (value) {
        list.push(value)
        updateMyArray();
    }
}

function dequeue() {
    list.shift()
    updateMyArray()
}

function front() {
    if (list.length > 0) {
        document.getElementById("message").innerHTML = list[0]    
    } else {
        console.log("esta vazio")
    }
    
}
function rear() {
    if (list.length > 0) {
        document.getElementById("message").innerHTML = list[list.length - 1]    
    } else {
        console.log("esta vazio")
    }
}

function isEmpty() {
    if (list) {
        document.getElementById("message").innerHTML = "True"    
    } else {
        document.getElementById("message").innerHTML = "False"    
    }
}

function size() {
    document.getElementById("message").innerHTML = list.length        
}

function updateMyArray() {
    document.getElementById("lista").innerHTML = ""
    for (const i of list) {
        document.getElementById("lista").innerHTML += `<div class="value_array">${i}</div>`
    }
    
}