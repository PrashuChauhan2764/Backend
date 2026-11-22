
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const task = input.value.trim();

    if (task === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    
    span.textContent = `${task}`;
    deleteBtn.textContent = "Delete";

    span.addEventListener("click", () => {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.append(span, deleteBtn);
    list.appendChild(li);

    input.value = "";
});

//usage of spread syntax

const tasks1 = ["Study JavaScript", "Practice DOM"];
const tasks2 = [...tasks1, "Complete experiment"];

console.log(tasks2);


//demonstrating destructing
const taskDetails = {
    title: "Learn DOM",
    completed: false
};

const { title, completed } = taskDetails;

console.log(title);
console.log(completed);

//demonstrating default parameters
const greet = (name = "Student") => {
    return `Hello, ${name}!`;
};

console.log(greet());
console.log(greet("Prashu"));
