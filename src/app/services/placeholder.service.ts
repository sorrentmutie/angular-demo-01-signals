import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from  "../models/models";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class PlaceholderService {

  private  httpService = inject(HttpClient);
  private userUrl = 'https://jsonplaceholder.typicode.com/users';
  private users$ = this.httpService.get<User[]>(this.userUrl);

  users = toSignal(this.users$, {initialValue: [] as User[]});

  selectedUserId = signal<number>(0)

  setSelectedUserId(id: number): void {
    this.selectedUserId.set(id);
  }
}
