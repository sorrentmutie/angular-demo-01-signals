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

  private userTasks$ = toObservable(this.userService.selectedUserId)
    .pipe(
      switchMap( userId =>
       this.httpService.get<ToDo[]>(this.todoUrl + userId)));
        userTasks = toSignal(this.userTasks$, {initialValue: [] as ToDo[]});
}
