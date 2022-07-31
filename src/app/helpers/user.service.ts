import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.interface';
import { ServerURL } from './server-url';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private SERVER_URL: string = 'http://localhost:4200/api/';
  private SERVER_URL: string = ServerURL();

  constructor(private _httpService: HttpClient) { }

  getUsers(){
    return this._httpService.get<User[]>(this.SERVER_URL+'allUsers');
  }

  getUser(id: number){
    return this._httpService.get<User>(`${this.SERVER_URL}allUsers/${id}`);
  }

  editUser(user: User){
    return this._httpService.put(`${this.SERVER_URL}allUsers/${user.id}`, user);
  }

  addUser(user: User){
    return this._httpService.post(`${this.SERVER_URL}allUsers`, user);
  }

  deleteUser(id: number){
    return this._httpService.delete(`${this.SERVER_URL}allUsers/${id}`);
  }
}
