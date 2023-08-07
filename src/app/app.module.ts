import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserTodosComponent } from './components/user-todos/user-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    MenuComponent,
    UserTodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
