import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AlertService, UserService } from '../shared/services/index';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  model: any = { user: {

  }};
  loading = false;
  constructor(
    private router: Router,
    // private userService: UserService,
    // private alertService: AlertService
  ) { }

  // register() {
  //   this.loading = true;
  //   this.userService.create(this.model)
  //     .subscribe(
  //       data => {
  //         this.alertService.success('Registration successful', true);
  //         this.router.navigate(['/accounts/login']);
  //       },
  //       error => {
  //         console.log("Errored", error);
  //         this.alertService.error(error._body);
  //         this.loading = false;
  //       });
  // }
}
