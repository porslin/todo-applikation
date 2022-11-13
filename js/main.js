//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const clearButton = document.querySelector(".clear-button");

const todoItem = document.querySelector(".todo-item");
const doneList = document.querySelector(".done-list");


//event listeners
todoButton.addEventListener('click', addTodo);

//function to add item to todolist
function addTodo(event) {
	
	event.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const editButton = document.createElement('button');
	editButton.innerText = 'Ändra';
	editButton.classList.add("edit-btn");
	todoDiv.appendChild(editButton);
 
	const completedButton = document.createElement('button');
	completedButton.innerText = 'Färdig';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);

	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'Radera';
	deleteButton.classList.add("delete-btn");
	todoDiv.appendChild(deleteButton);

	if (todoInput.value !== '') {
		todoList.appendChild(todoDiv);
	}

	todoInput.value = "";
};

/*

//function to remove item from todolist
function deleteTodo(e) {
	const item = e.target;

	if (item.classList[0] === "delete-btn") {
		const todo = item.parentElement;
		todo.remove();
	}
}
*/

//trying another function to edit and remove todolist items
todoList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const button = event.target;
		const div = button.parentNode;
		const todoList = div.parentNode;

		if (button.textContent === 'Radera') {
			todoList.removeChild(div);
		}
		else if (button.textContent === 'Ändra') {
			const li = div.firstElementChild;
			const input = document.createElement('input');
			input.classList.add('newinput');
			input.type = 'text';
			input.value = li.textContent;
			div.insertBefore(input, li);
			div.removeChild(li);
			button.textContent = 'Spara';
		}
		else if (button.textContent === 'Spara') {
			const input = div.firstElementChild;
			const li = document.createElement('li');
			li.textContent = input.value;
			div.insertBefore(li, input);
			div.removeChild(input);
			button.textContent = 'Ändra';
		}
		else if (button.textContent === 'Färdig') {
			doneList.appendChild(div);
			div.removeChild(button);
			// todoList.removeChild(div);
		}
	}
});

//hur ska man få knapparna att funka på båda listor
doneList.addEventListener('click', (event) => {
	if (event.target.tagName === 'BUTTON') {
		const button = event.target;
		const div = button.parentNode;
		const todoList = div.parentNode;

		if (button.textContent === 'Radera') {
			todoList.removeChild(div);
		}
		else if (button.textContent === 'Ändra') {
			const li = div.firstElementChild;
			const input = document.createElement('input');
			input.classList.add('newinput');
			input.type = 'text';
			input.value = li.textContent;
			div.insertBefore(input, li);
			div.removeChild(li);
			button.textContent = 'Spara';
		}
		else if (button.textContent === 'Spara') {
			const input = div.firstElementChild;
			const li = document.createElement('li');
			li.textContent = input.value;
			div.insertBefore(li, input);
			div.removeChild(input);
			button.textContent = 'Ändra';
		}
	}
});

