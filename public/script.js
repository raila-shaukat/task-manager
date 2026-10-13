const API = "/api/tasks";

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = task.title;
    if (task.completed) span.className = "done";

    const div = document.createElement("div");

    const doneBtn = document.createElement("button");
    doneBtn.textContent = task.completed ? "Undo" : "Done";
    doneBtn.onclick = () => toggleTask(task._id, task.completed);

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => deleteTask(task._id);

    div.appendChild(doneBtn);
    div.appendChild(delBtn);
    li.appendChild(span);
    li.appendChild(div);
    list.appendChild(li);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim() === "") return;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: input.value }),
  });

  input.value = "";
  loadTasks();
}

async function toggleTask(id, completed) {
  await fetch(API + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !completed }),
  });
  loadTasks();
}

async function deleteTask(id) {
  await fetch(API + "/" + id, { method: "DELETE" });
  loadTasks();
}

loadTasks();