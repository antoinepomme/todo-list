import trash from '../assets/icons/trash.svg';
import edit from '../assets/icons/edit.svg';
import cross from '../assets/icons/cross-black.svg';
import { todoArr } from '../index.js';

const mainContainerForTodo = document.getElementById("main-container");
let content = document.getElementById("content");

function todo(title, description, dueDate, priority, project) {
    let todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.id = todoArr.length;

    todoItem.setAttribute("data-title", title);
    if (project) {
        todoItem.setAttribute("data-project", project);
    } else {
        todoItem.setAttribute("data-project", "None");
    }
    todoItem.setAttribute("data-priority", priority);
    todoItem.setAttribute("data-date", dueDate);
    todoItem.setAttribute("data-description", description);

    function showDetails(element) {
        let todoDialog = document.createElement("dialog");
        todoDialog.classList.add("todo-dialog");

        let closeDialog = document.createElement("button");
        let crossIcon = new Image();
        crossIcon.src = cross;
        closeDialog.appendChild(crossIcon);
        todoDialog.appendChild(closeDialog);

        let titleDialog = document.createElement("div");
        titleDialog.classList.add("todo-dialog-title");
        titleDialog.textContent = element.getAttribute("data-title");
        todoDialog.appendChild(titleDialog);

        let todoDialogContainer = document.createElement("div")
        todoDialogContainer.classList.add("todo-dialog-container")

        let projectDialogTitle = document.createElement("div");
        projectDialogTitle.classList.add("bold");
        projectDialogTitle.textContent = "Project :";
        todoDialogContainer.appendChild(projectDialogTitle);
        let projectDialog = document.createElement("div");
        projectDialog.textContent = element.getAttribute("data-project");
        todoDialogContainer.appendChild(projectDialog);

        let priorityDialogTitle = document.createElement("div");
        priorityDialogTitle.classList.add("bold");
        priorityDialogTitle.textContent = "Priority :";
        todoDialogContainer.appendChild(priorityDialogTitle);
        let priorityDialog = document.createElement("div");
        priorityDialog.textContent = element.getAttribute("data-priority");
        todoDialogContainer.appendChild(priorityDialog);

        let dateDialogTitle = document.createElement("div");
        dateDialogTitle.classList.add("bold");
        dateDialogTitle.textContent = "Due Date :";
        todoDialogContainer.appendChild(dateDialogTitle);
        let dateDialog = document.createElement("div");
        dateDialog.textContent = element.getAttribute("data-date");
        todoDialogContainer.appendChild(dateDialog);

        let detailsDialogTitle = document.createElement("div");
        detailsDialogTitle.classList.add("bold");
        detailsDialogTitle.textContent = "Description :";
        todoDialogContainer.appendChild(detailsDialogTitle);
        let detailsDialog = document.createElement("div");
        detailsDialog.textContent = element.getAttribute("data-description");
        todoDialogContainer.appendChild(detailsDialog);

        todoDialog.appendChild(todoDialogContainer);
        document.body.appendChild(todoDialog);

        todoDialog.addEventListener('cancel', () => {
            while (todoDialog.firstChild) {
                if (closeDialog.firstChild) {
                    closeDialog.removeChild(closeDialog.firstChild);
                }
                while (todoDialogContainer.firstChild) {
                    todoDialogContainer.removeChild(todoDialogContainer.firstChild);
                }
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        });

        closeDialog.addEventListener('click', () => {
            while (todoDialog.firstChild) {
                if (closeDialog.firstChild) {
                    closeDialog.removeChild(closeDialog.firstChild);
                }
                while (todoDialogContainer.firstChild) {
                    todoDialogContainer.removeChild(todoDialogContainer.firstChild);
                }
                todoDialog.removeChild(todoDialog.firstChild);
            }
            todoDialog.close();
            document.body.removeChild(todoDialog);
            mainContainerForTodo.style.filter = "blur(0px)";
        });

        todoDialog.showModal();
        mainContainerForTodo.style.filter = "blur(3px)";
    }

    let priorityColor = "green";
    if (priority === "Medium") {
        priorityColor = "orange";
    } else if (priority === "High") {
        priorityColor = "red";
    }
    todoItem.style.borderLeft = "solid " + priorityColor + " 3px";

    let todoCheckBox = document.createElement("input");
    todoCheckBox.type = "checkbox";
    todoCheckBox.classList.add("todo-check");
    todoItem.appendChild(todoCheckBox);
    todoCheckBox.addEventListener('change', () => {
        todoItem.classList.toggle("done");
    });

    let todoTitle = document.createElement("div");
    todoTitle.classList.add("todo-title")
    todoTitle.textContent = title;
    todoItem.appendChild(todoTitle);

    let todoDetailsButton = document.createElement("button");
    todoDetailsButton.classList.add("todo-details")
    todoDetailsButton.textContent = "DETAILS";
    todoItem.appendChild(todoDetailsButton);
    todoDetailsButton.addEventListener('click', () => {
        showDetails(todoItem);
    });

    let todoDate = document.createElement("div");
    todoDate.classList.add("todo-date");
    todoDate.textContent = dueDate;
    todoItem.appendChild(todoDate);

    let todoEditButton = document.createElement("button");
    let editIcon = new Image();
    editIcon.src = edit;
    todoEditButton.appendChild(editIcon);
    todoItem.appendChild(todoEditButton);

    let todoDeleteButton = document.createElement("button");
    let editTrash = new Image();
    editTrash.src = trash;
    todoDeleteButton.appendChild(editTrash);
    todoItem.appendChild(todoDeleteButton);
    todoDeleteButton.addEventListener('click', () => {
        let i = todoItem.id;
        while (todoItem.firstChild) {
            todoItem.removeChild(todoItem.firstChild);
        }
        todoItem.parentNode.removeChild(todoItem);
        todoArr.splice(i, 1);
        while (todoArr[i]) {
            console.log(i);
            (todoArr[i]).id -= 1;
            i++;
        }
    });

    return todoItem;
}

function todoDisplay (project) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (project) {
        for (let i of todoArr) {
            if (i.getAttribute("data-project") === project)
            content.appendChild(i);
        }
    } else {
        for (let i of todoArr) {
            content.appendChild(i);
        }
    }
}

function todoAdd (title, description, dueDate, priority, project) {
    todoArr.push(todo(title, description, dueDate, priority, project));
    todoDisplay();
}

export { todo, todoDisplay, todoAdd };