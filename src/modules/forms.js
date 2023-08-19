import todo from './todo.js';

function todoForm() {
    let mainContainer = document.getElementById("main-container");
    let content = document.getElementById("content");
    let dialog = document.getElementById("dialog");
    let form = document.createElement("form");
    form.classList.add("todo-form");
    form.autocomplete = "off";

    let formTitle = document.createElement("input");
    formTitle.type = "text";
    formTitle.name = "todo-form-title";
    formTitle.id = "todo-form-title";
    formTitle.classList.add("todo-form-title");
    formTitle.placeholder = "Title: Pay bills"
    formTitle.required = true;
    form.appendChild(formTitle);

    let formDescription = document.createElement("textarea");
    //formDescription.type = "text";
    formDescription.name = "todo-form-description";
    formDescription.id = "todo-form-description";
    formDescription.classList = "todo-form-description";
    formDescription.placeholder = "Details: eg internet, phone, rent.";
    form.appendChild(formDescription);

    let formDateContainer = document.createElement("div");
    formDateContainer.classList.add("form-date-container");
    let formDateTitle = document.createElement("label");
    formDateTitle.textContent = "Due Date :";
    formDateContainer.appendChild(formDateTitle);
    let formDate = document.createElement("input")
    formDate.type = "date";
    formDate.name = "todo-form-date";
    formDate.id = "todo-form-date";
    formDate.classList = "todo-form-date";
    formDate.required = true;
    formDateContainer.appendChild(formDate);
    form.appendChild(formDateContainer);

    let formPriorityTitle = document.createElement("label");
    formPriorityTitle.textContent = "Priority :";
    formDateContainer.appendChild(formPriorityTitle);
    let formRadioContainer = document.createElement("div");
    formRadioContainer.classList.add("radio-container");
    let formPriorityLowContainer = document.createElement("div");
    formPriorityLowContainer.classList.add("radio");
    let formPriorityMediumContainer = document.createElement("div");
    formPriorityMediumContainer.classList.add("radio");
    let formPriorityHighContainer = document.createElement("div");
    formPriorityHighContainer.classList.add("radio");
    let formPriorityLow = document.createElement("input");
    formPriorityLow.type = "radio";
    formPriorityLow.name = "todo-form-priority";
    formPriorityLow.id = "todo-form-priority-low";
    formPriorityLow.classList = "todo-form-priority";
    formPriorityLow.value = "Low";
    formPriorityLow.required = true;
    let formPriorityLowLabel = document.createElement("label");
    formPriorityLowLabel.classList.add("low");
    formPriorityLowLabel.setAttribute("for", "todo-form-priority-low");
    formPriorityLowLabel.textContent = "LOW";
    let formPriorityMedium = document.createElement("input");
    formPriorityMedium.type = "radio";
    formPriorityMedium.name = "todo-form-priority";
    formPriorityMedium.id = "todo-form-priority-medium";
    formPriorityMedium.classList = "todo-form-priority";
    formPriorityMedium.value = "Medium";
    formPriorityMedium.required = true;
    let formPriorityMediumLabel = document.createElement("label");
    formPriorityMediumLabel.classList.add("medium");
    formPriorityMediumLabel.setAttribute("for", "todo-form-priority-medium");
    formPriorityMediumLabel.textContent = "MEDIUM";
    let formPriorityHigh = document.createElement("input");
    formPriorityHigh.type = "radio";
    formPriorityHigh.name = "todo-form-priority";
    formPriorityHigh.id = "todo-form-priority-high";
    formPriorityHigh.classList = "todo-form-priority";
    formPriorityHigh.value = "High";
    formPriorityHigh.required = true;
    let formPriorityHighLabel = document.createElement("label");
    formPriorityHighLabel.classList.add("high");
    formPriorityHighLabel.setAttribute("for", "todo-form-priority-high");
    formPriorityHighLabel.textContent = "HIGH";
    formPriorityLowContainer.appendChild(formPriorityLow);
    formPriorityLowContainer.appendChild(formPriorityLowLabel);
    formPriorityMediumContainer.appendChild(formPriorityMedium);
    formPriorityMediumContainer.appendChild(formPriorityMediumLabel);
    formPriorityHighContainer.appendChild(formPriorityHigh);
    formPriorityHighContainer.appendChild(formPriorityHighLabel);
    formRadioContainer.appendChild(formPriorityLowContainer);
    formRadioContainer.appendChild(formPriorityMediumContainer);
    formRadioContainer.appendChild(formPriorityHighContainer);
    formDateContainer.appendChild(formRadioContainer);

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.classList.add("submit-button");
    submitButton.value = "ADD TO DO";
    formDateContainer.appendChild(submitButton);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        content.appendChild(todo(formTitle.value, formDescription.value, formDate.value, document.querySelector('input[name="todo-form-priority"]:checked').value));
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
        dialog.close();
        mainContainer.style.filter = "blur(0px)";
        form.parentNode.removeChild(form);
    })

    return form;
}

function projectForm() {
    let mainContainer = document.getElementById("main-container");
    let dialog = document.getElementById("dialog");
    let form = document.createElement("form");
    form.classList.add("project-form");
    form.autocomplete = "off";

    let formTitle = document.createElement("input");
    formTitle.type = "text";
    formTitle.name = "project-form-title";
    formTitle.id = "project-form-title";
    formTitle.classList.add("project-form-title");
    formTitle.placeholder = "Title: House Renovation"
    formTitle.required = true;
    form.appendChild(formTitle);

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.classList.add("submit-button");
    submitButton.value = "CREATE PROJECT";
    form.appendChild(submitButton);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //content.appendChild(todo(formTitle.value, formDescription.value, formDate.value, document.querySelector('input[name="todo-form-priority"]:checked').value));
        while (form.firstChild) {
            form.removeChild(form.firstChild);
        }
        dialog.close();
        mainContainer.style.filter = "blur(0px)";
        form.parentNode.removeChild(form);
    })

    return form;
}

export { todoForm, projectForm }