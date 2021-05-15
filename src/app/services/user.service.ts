import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.baseUrl

  constructor( private http: HttpClient ) { }

  getUser():Observable<User[]>{
    return this.http.get(`${this.url}/users?page=2`)
            .pipe(
              map( (resp: any) => {
                return resp['data'];
              })
            )
  }
}
