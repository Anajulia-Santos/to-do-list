const newList = document.getElementById('list');
const newInput = document.getElementById('new-item');
const addButton = document.getElementById('add-item');

let todoList = [];

addButton.addEventListener('click', () => {
    const newItem = newInput.value.trim();
    if (newItem !== '') {
        todoList.push(newItem);
        newInput.value = '';
        renderList();
    }
});

newList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
        const index = e.target.parentNode.getAttribute('data-index');
        todoList.splice(index, 1);
        renderList();
    }
});

function renderList() {
    newList.innerHTML = '';
    todoList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.setAttribute('data-index', index);
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-btn';
        removeButton.innerHTML = '<img src="./img/remove.png" alt="Remove" style="width: 20px; height: 20px;">';
        listItem.appendChild(removeButton);
        newList.appendChild(listItem);
    });
}

renderList();