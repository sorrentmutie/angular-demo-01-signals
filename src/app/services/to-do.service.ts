import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PlaceholderService} from "./placeholder.service";
import {ToDo} from "../models/models";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";
import {switchMap, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  httpService = inject(HttpClient);
  userService = inject(PlaceholderService);
  todoUrl = 'https://jsonplaceholder.typicode.com/todos?userId=';

  userTasks = signal<ToDo[]>([]);


  userTasks$ = toObservable((this.userService.selectedUserId))
    .pipe(switchMap( userId =>
      this.httpService.get<ToDo[]>(this.todoUrl + userId)
        .pipe(tap( tasks => this.userTasks.set(tasks))
    )));

  readOnlyUserTasks = toSignal(this.userTasks$, {initialValue: [] as ToDo[]});


  markComplete(task: ToDo) {
   this.userTasks.mutate( () => task.completed = true );
  }

  constructor() { }
}
