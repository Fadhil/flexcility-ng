import { UsersService } from './../../../user.service';
import { User } from './../../../models/user';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.scss']
})
export class AdminUserViewComponent implements OnInit {
  @Input()
  user: User;

  constructor(private userService: UsersService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.userService.getUser(id).then(user => this.user = user);
  });

  }

}
