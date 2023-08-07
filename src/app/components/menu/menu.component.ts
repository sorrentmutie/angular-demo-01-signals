import {Component, inject} from '@angular/core';
import {PlaceholderService} from "../../services/placeholder.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
   placeholderService = inject(PlaceholderService);
   userSelectedId = this.placeholderService.selectedUserId;
}
