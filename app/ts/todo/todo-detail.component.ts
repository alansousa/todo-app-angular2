import {Component, OnInit} from "angular2/core";
import {TodoService} from "./todo.service";
import {Todo} from "./todo";

@Component({
    templateUrl: "app/views/todo-detail.html",
    providers: [TodoService]
})

export class TodoDetailComponent implements OnInit {
    public todos: Todo[] = [];

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        this.getArchive();
    }

    public remove(todo: Todo): void {
        this._todoService.remove(todo);
        this.getArchive();
    }

    private getArchive(): void {
        this.todos = this._todoService.getArchive();
    }

}