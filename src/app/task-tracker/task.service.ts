import { Injectable } from '@angular/core';
import { Task } from './Task';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerURL } from '../helpers/server-url';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private SERVER_URL: string = ServerURL();

  constructor(private httpService: HttpClient) { }

  getTasks(): Observable<Task[]>  {
    return this.httpService.get<Task[]>(this.SERVER_URL+'tasks');
  }

  deleteTask(id: number)  {
    return this.httpService.delete(`${this.SERVER_URL}tasks/${id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.httpService.put<Task>(`${this.SERVER_URL}tasks/${task.id}`, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpService.post<Task>(`${this.SERVER_URL}tasks`, task);
  }
}
