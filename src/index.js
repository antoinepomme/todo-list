import './styles/style.css';
import './styles/todo.css';
import './styles/forms.css';
import { format, compareAsc } from 'date-fns';
import { todoDisplay, todoAdd } from './modules/todo.js';
import { todoForm, projectForm } from './modules/forms.js';
import { projectsDisplay, projectsAdd } from './modules/projects.js';

//main dialog
const mainContainer = document.getElementById("main-container");
const addButton = document.getElementById("add");
let dialog = document.getElementById("dialog");
const dialogContent = document.getElementById("dialog-content");
const todoFormButton = document.getElementById("todo-form-button");
const projectFormButton = document.getElementById("project-form-button");
const closeButton = document.getElementById("dialog-close");

export let projectArr = [];
export let todoArr = [];

todoFormButton.addEventListener('click', () => {
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
    dialogContent.appendChild(todoForm());
});
projectFormButton.addEventListener('click', () => {
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
    dialogContent.appendChild(projectForm());
});


addButton.addEventListener('click', () => {
    dialog.showModal();
    mainContainer.style.filter = "blur(3px)";
    dialogContent.appendChild(todoForm());
});
closeButton.addEventListener('click', () => {
    dialog.close();
    mainContainer.style.filter = "blur(0px)";
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
});
dialog.addEventListener('cancel', () => {
    mainContainer.style.filter = "blur(0px)";
    while (dialogContent.firstChild) {
        dialogContent.removeChild(dialogContent.firstChild);
    }
});


const allButton = document.getElementById("all-button");
allButton.addEventListener('click', () => {
    todoDisplay();
});


//


//examples
(todoAdd("abc", "1", "DATETEST", "High", "test"));
(todoAdd("b", "2", "DATETEST", "Medium"));
(todoAdd("c", "3", "DATETEST", "High"));
(todoAdd("d", "4", "DATETEST", "Low", "test"));

projectsAdd("test");
projectsAdd("test2");
projectsAdd("test3");