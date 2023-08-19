import './styles/style.css';
import './styles/todo.css';
import './styles/forms.css';
import { format, compareAsc } from 'date-fns';
import todo from './modules/todo.js';
import { todoForm, projectForm } from './modules/forms.js';

//main dialog
const mainContainer = document.getElementById("main-container");
const addButton = document.getElementById("add");
let dialog = document.getElementById("dialog");
const closeButton = document.getElementById("dialog-close");
addButton.addEventListener('click', () => {
    dialog.showModal();
    mainContainer.style.filter = "blur(3px)";
});
closeButton.addEventListener('click', () => {
    dialog.close();
    mainContainer.style.filter = "blur(0px)";
});
dialog.addEventListener('cancel', () => {
    mainContainer.style.filter = "blur(0px)";
});

const dialogContent = document.getElementById("dialog-content");
const todoFormButton = document.getElementById("todo-form-button");
todoFormButton.addEventListener('click', () => {
    dialogContent.appendChild(todoForm());
});

//


//examples
let content = document.getElementById("content");
content.appendChild(todo("a", "1", "DATETEST", "High"));
content.appendChild(todo("b", "2", "DATETEST", "Medium"));
content.appendChild(todo("c", "3", "DATETEST", "High"));
content.appendChild(todo("d", "4", "DATETEST", "Low"));