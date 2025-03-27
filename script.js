document.getElementById("addTask").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Masukkan tugas terlebih dahulu!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete">Hapus</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    li.querySelector(".delete").addEventListener("click", function() {
        li.remove();
    });
});