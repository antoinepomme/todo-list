import './styles/style.css';
import { format, compareAsc } from 'date-fns';
import todo from './modules/todo.js';

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
