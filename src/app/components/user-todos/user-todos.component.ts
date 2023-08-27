import {Component, computed, inject} from '@angular/core';
import {ToDoService} from "../../services/to-do.service";
import {ToDo} from "../../models/models";

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.css']
})
export class UserTodosComponent {
  private service = inject(ToDoService);
  userTasks = this.service.userTasks;
  completedCount = computed(
    () => (this.userTasks().filter(task => task.completed)).length);

  pageTitle =  computed(
     () =>'User ToDos Completed: ' + this.completedCount());

  
}
