'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData= new Map(JSON.parse(localStorage.getItem('toDoList')));
    }

    addToStorage() {
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]))
    }

    addTodo(e) {
        e.preventDefault();
        if(this.input.value.trim()){
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey()
            };
            this.todoData.set(newTodo.key, newTodo);
            this.input.value = '';
            this.render();
        }
    }

    generateKey() {
        return Math.random().toString(36).substring(2,15) +  Math.random().toString(36).substring(2,15);
    }

    render() {
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem);
        this.addToStorage();

    }

    createItem = (todo) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.key = todo.key; 
        li.insertAdjacentHTML('beforeend', `
                <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
                `);
        if(todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    
    deleteItem = (todo) => {
        this.todoData.forEach((elem,index, arr) => {
            if(elem.key === todo.path[2].key) {
            arr.delete(index);
            };
        });  
        this.render();

    } 
    
    completedItem = (todo) => { 
    this.todoData.forEach((elem,index) => {
            if(elem.key === todo.path[2].key) {
                elem.completed = !elem.completed;
            };
        });  
        this.render();
    }

    handler() {
        const btnContainer = document.querySelector('.todo-container');
        
        btnContainer.addEventListener('click', () => {
            if (!event.target.matches('button.todo-complete')) {
                return;
            }
            this.completedItem(event);
        });

        btnContainer.addEventListener('click', () => {
            if (!event.target.matches('button.todo-remove')) {
                return;
            }
            this.deleteItem(event);
        });
    }



    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();

