const todoList = document.getElementById("list-todo");
const buttonAddItem = document.getElementById("button-add-item");

let counter = 0;

buttonAddItem.addEventListener('click', event => {
    const listItem = document.createElement('li');
    listItem.className = "list-group-item";
    
    const id = counter;
    const onSubmit = (event) => {
        const editText = document.getElementById(`edit-text-${id}`);
        // alert(`Submit clicked with value = ${editText.value}`);
        todoList.removeChild(document.getElementById(`list-item-${id}`));
        todoList.appendChild(createListItem(editText.value));
    }

    const onCancel = () => {
        todoList.removeChild(document.getElementById(`list-item-${id}`));
    }

    listItem.id = `list-item-${id}`;

    listItem.appendChild(createInputElement(id, onSubmit, onCancel));

    todoList.appendChild(listItem);

    counter += 1;
}) 

function createListItem(message) {
    const listItem = document.createElement('li');
    listItem.className = "list-group-item";
    
    const textNode = document.createTextNode(message);
    listItem.appendChild(textNode);

    return listItem;
}

function createInputElement(id, onSubmit, onCancel) {

    const outerDiv = document.createElement('div');
    outerDiv.classList.add("input-group", "mb-3");

    const editText = document.createElement('input');
    editText.id = `edit-text-${id}`
    editText.type = "text";
    editText.className = "form-control"
    editText.placeholder = "Enter Todo Item";

    const innerDiv = document.createElement('div');
    innerDiv.className = "input-group-append";

    const submitButton = document.createElement('button');
    submitButton.classList.add("btn", "btn-outline-primary");
    submitButton.type = "button";
    submitButton.innerText = "Submit"
    submitButton.onclick = onSubmit;

    const cancelButton = document.createElement('button');
    cancelButton.classList.add("btn", "btn-outline-danger");
    cancelButton.type = "button";
    cancelButton.innerText = "Cancel"
    cancelButton.onclick = onCancel;

    innerDiv.appendChild(submitButton);
    innerDiv.appendChild(cancelButton);
    outerDiv.appendChild(editText);
    outerDiv.appendChild(innerDiv);

    return outerDiv;
}