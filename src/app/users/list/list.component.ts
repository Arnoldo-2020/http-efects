import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor( private userService: UserService ) { }

  ngOnInit(): void {

    this.userService.getUser()
      .subscribe( users => {
        console.log(users);
        this.users = users;
      });

  }

  

}
