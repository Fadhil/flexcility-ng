import { UsersService } from './../../../user.service';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin-user-home',
  templateUrl: './admin-user-home.component.html',
  styleUrls: ['./admin-user-home.component.scss'],
  providers: [UsersService]
})

export class AdminUserHomeComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }
  onSelect(user: User): void {
    this.selectedUser = user;

  }
  gotoDetail(user: User): void {
    let link = ['/admin/user/view', user._id];
    this.router.navigate(link);
    this.selectedUser = user;
  }


}
