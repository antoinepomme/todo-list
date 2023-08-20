import icon from "../assets/icons/project.svg";
import { projectArr } from '../index.js';
import { todoDisplay } from "./todo.js";

function projectsDisplay () {
    const projectsContainer = document.getElementById("projects-ul");
    while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
    for (let i of projectArr) {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.classList.add(i);
        button.id = i;
        let image = new Image();
        image.src = icon;
        let span = document.createElement("span");
        span.textContent = i;
        button.appendChild(image);
        button.appendChild(span);
        li.appendChild(button);
        projectsContainer.appendChild(li);
        button.addEventListener('click', () => {
            console.log(i);
            todoDisplay(i);
        });
    }
}

function projectsAdd (project) {
    projectArr.push(project);
    projectsDisplay();
}

export { projectsDisplay, projectsAdd };