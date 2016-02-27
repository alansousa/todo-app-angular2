import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";
import {TodoMasterComponent} from "./todo/todo-master.component";
import {TodoDetailComponent} from "./todo/todo-detail.component";

@Component({
    selector: "todo-app",
    templateUrl: "app/views/app.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: "/todo", name: "Todo", component: TodoMasterComponent, useAsDefault: true },
    { path: "/todos", name: "Todos", component: TodoDetailComponent }
])

export class AppComponent { }