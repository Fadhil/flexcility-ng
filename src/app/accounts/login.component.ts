
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../shared/services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  adminReturnUrl: string;
  engineerReturnUrl: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.adminReturnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/dashboard';

    this.engineerReturnUrl = this.route.snapshot.queryParams['returnUrl'] || '/engineer/dashboard';
    
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          var user = JSON.parse(localStorage.getItem('currentUser'));
          if(user.role == 'Admin'){
            this.router.navigate([this.adminReturnUrl]);
          } else if(user.role == 'Engineer') {
            this.router.navigate([this.engineerReturnUrl]);
          } else {
            this.router.navigate(['/accounts/login']);
          }

        },
        error => {
          this.alertService.error(error._body);
          this.loading = false;
        });
  }
}
