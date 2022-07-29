import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';

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
    return {allUsers: users};
  };


}
