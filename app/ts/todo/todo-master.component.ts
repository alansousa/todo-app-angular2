import {Component, OnInit} from "angular2/core";
import {Todo} from "./todo";
import {TodoService} from "./todo.service";

@Component({
    templateUrl: "app/views/todo-master.html",
    providers: [TodoService]
})

export class TodoMasterComponent implements OnInit {
    public todos: Todo[] = [];
    todo: Todo = {
        id: 0,
        done: false,
        text: ""
    };

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        this.getPending();
    }

    public add(): void {
        this._todoService.add(this.todo);
        this.getPending();
        this.todo.text = "";
    }

    public getPending(): void {
        this.todos = this._todoService.getPending();
    }

    public archive(todo: Todo) {
        this._todoService.archive(todo);
        this.getPending();
    }
}