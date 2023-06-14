let numberOfTasksDone = 0;
let numberOfTasksCreated = 0;
let tasksDone = document.querySelector(".done");
let tasksCreated = document.querySelector(".created");

const list = document.querySelector(".list_unfinished");
const listFinished = document.querySelector(".list_finished");
const flavorText1 = document.querySelector(".flavortext1");
const flavorText2 = document.querySelector(".flavortext2");

document.querySelector("form").addEventListener("submit", addTask);

function addTask() {
    event.preventDefault();

    makeListVisibleAndHideFlavorText(list, flavorText1);

    // create a new task
    const inputForm = document.querySelector("input");
    const task = document.createElement("li");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = inputForm.value;
    task.appendChild(taskSpan);

    // create the buttons
    const button1 = document.createElement("button");
    task.appendChild(button1);
    button1.addEventListener("click", finishTask);
    const button2 = document.createElement("button");
    task.appendChild(button2);
    button2.addEventListener("click", deleteTask);

    list.appendChild(task);

    numberOfTasksCreated++;
    tasksCreated.textContent = numberOfTasksCreated;

    inputForm.value = "";
    inputForm.focus();
}

function finishTask() {
    makeListVisibleAndHideFlavorText(listFinished, flavorText2);

    listFinished.appendChild(this.parentNode);

    numberOfTasksDone++;
    tasksDone.textContent = numberOfTasksDone;

    isListEmpty();
}

function deleteTask() {
    this.parentNode.remove();
    numberOfTasksCreated--;
    tasksCreated.textContent = numberOfTasksCreated;

    isListEmpty();
}

function makeListVisibleAndHideFlavorText(list, flavor) {
    if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
    flavor.classList.add("hidden");
 }
}

function isListEmpty() {
    if(!list.hasChildNodes()) {
        list.classList.add("hidden");
        flavorText1.classList.remove("hidden");
    }
}