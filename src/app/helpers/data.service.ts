import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';
import { Task } from '../task-tracker/Task';
import { TasksComponent } from '../task-tracker/tasks/tasks.component';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb(){
    let users: User[] = [
      {
        id: 1,
        title: 'Mr.',
        firstName: 'Ajeet',
        lastName: 'Singh',
        dob: '12-Aug-1973',
        email: 'tasawarahmed@yahoo.com',
        password: 'hello',
        acceptPassword: 'hello',
        acceptTerms: true
      },
      {
        id: 2,
        title: 'Mr.',
        firstName: 'Prajeet',
        lastName: 'Singh',
        dob: '12-Aug-1972',
        email: 'singh@yahoo.com',
        password: 'hello',
        acceptPassword: 'hello',
        acceptTerms: true
      }
    ];

    //it can be returned in this way
    //return users;

    //but return should be in the form of object
    //return {users};

    //return can also be made in form of alias as under

    let TASKS: Task[] = [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Nurse Appointment',
        day: 'May 6th at 2:30pm',
        reminder: false,
      },
      {
        id: 3,
        text: 'Attendant Appointment',
        day: 'May 7th at 2:30pm',
        reminder: true,
      },
      {
        id: 4,
        text: 'Carpenter Appointment',
        day: 'May 8th at 2:30pm',
        reminder: false,
      }
    ];

    return {tasks: TASKS, allUsers: users};

  };


}
