import './styles/style.css';
import { format, compareAsc } from 'date-fns';
import todo from './modules/todo.js';


const addButton = document.getElementById("add");
const dialog = document.getElementById("dialog");
addButton.addEventListener('click', () => {
    dialog.showModal();
})
