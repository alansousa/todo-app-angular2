import {Todo} from "./todo";

export class TodoService {
    public add(todoService: Todo): void {
        todoService.id = this.getNextId();
        let todos = this.getFromLocalStorage();
        todos.push(todoService);
        this.addToLocalStorage(todos);
    }

    public get(): Todo[] {
        return this.getFromLocalStorage();
    }

    public getPending(): Todo[] {
        let todos: Todo[] = this.getFromLocalStorage();
        return todos.filter(function(element) {
            return element.done === false;
        });
    }

    public getArchive(): Todo[] {
        let todos: Todo[] = this.getFromLocalStorage();
        return todos.filter(function(element) {
            return element.done === true;
        });
    }

    public archive(todo: Todo): void {
        let todos = this.getFromLocalStorage();
        todos.forEach(function(value, key) {
            if (value.id === todo.id) {
                value.done = true;
                return;
            }
        });
        this.addToLocalStorage(todos);
    }

    public remove(todo: Todo): void {
        let todos = this.getFromLocalStorage();
        todos = todos.filter(function(element) {
            return element.id !== todo.id;
        });
        this.addToLocalStorage(todos);
    }

    private getNextId(): number {
        return this.getFromLocalStorage().length + 1;
    }

    private addToLocalStorage(todos: Todo[]): void {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    private getFromLocalStorage(): Todo[] {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

}