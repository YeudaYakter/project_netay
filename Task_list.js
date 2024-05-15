window.onload = function () {
    // טעינת המשימות מ-localStorage אם קיימות
    let storedTasks = JSON.parse(localStorage.getItem('tasksList'));
    if (storedTasks) {
        storedTasks.forEach(task => {
            addTaskToList(task.name, task.content);
        });
    }

    // הוספת אירוע לכפתור Add
    document.getElementById("onAdd").onclick = function() {
        // קוד להוספת המשימה לרשימה
        let taskName = document.getElementById("id_h1").value;
        let taskContent = document.getElementById("id_h2").value;
        if (taskName.trim() !== '' && taskContent.trim() !== '') {
            addTaskToList(taskName, taskContent);
            saveTasksToLocalStorage();
        } else {
            alert("Please fill in both task name and content.");
        }
    }

    // פונקציה להוספת משימה לרשימה
    function addTaskToList(taskName, taskContent) {
        // יצירת אלמנט חדש עבור המשימה
        let newTaskElement = document.createElement("div");
        newTaskElement.classList.add("task");
        newTaskElement.innerHTML = `<div class = " border pe-3"> <h3>${taskName}</h3><p>${taskContent}</p></div>`;
    

        // הוספת המשימה לרשימה
        document.getElementById("id_row").appendChild(newTaskElement);
        let id_row2 = document.querySelector("#id_row");
        let mybtn = document.createElement("button");
        mybtn.innerHTML = 'delete';
        id_row2.appendChild(mybtn);
        mybtn.onclick = function (){ localStorage.removeItem(newTaskElement); }

        // איפוס השדות לאחר הוספת המשימה
        document.getElementById("id_h1").value = "";
        document.getElementById("id_h2").value = "";
    }

    // פונקציה לשמירת המשימות ב-localStorage
    function saveTasksToLocalStorage() {
        let tasks = [];
        document.querySelectorAll('.task').forEach(taskElement => {
            let taskName = taskElement.querySelector('h3').innerText;
            let taskContent = taskElement.querySelector('p').innerText;
            tasks.push({ name: taskName, content: taskContent });
        });
        localStorage.setItem('tasksList', JSON.stringify(tasks));
    }
}
function del() {
    console.log("del pressed")
    
    localStorage.removeItem('tasksList');
}
