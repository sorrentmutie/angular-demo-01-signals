import {Component, inject} from '@angular/core';
import {PlaceholderService} from "../../services/placeholder.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
   usersService = inject(PlaceholderService);
   pageTitle = 'Users List';
   users = this.usersService.users;
   selectedUserId = this.usersService.selectedUserId;

   onSelected(id:number): void {
     this.usersService.setSelectedUserId(id);
   }
}
