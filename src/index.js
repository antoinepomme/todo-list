import './styles/style.css';
import './styles/todo.css';
import { format, compareAsc } from 'date-fns';
import todo from './modules/todo.js';

//main dialog
const mainContainer = document.getElementById("main-container");
const addButton = document.getElementById("add");
const dialog = document.getElementById("dialog");
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



//examples
let content = document.getElementById("content");
content.appendChild(todo("a", "1", "DATETEST", "High"));
content.appendChild(todo("b", "2", "DATETEST", "Medium"));
content.appendChild(todo("c", "3", "DATETEST", "High"));
content.appendChild(todo("d", "4", "DATETEST", "Low"));