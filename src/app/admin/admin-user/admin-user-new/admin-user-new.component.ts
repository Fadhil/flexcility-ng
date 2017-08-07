import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-user-new',
  templateUrl: './admin-user-new.component.html',
  styleUrls: ['./admin-user-new.component.scss']
})
export class AdminUserNewComponent implements OnInit {

registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: '',
      username: '',
      worker_id: '',
      no_phone: '',
      password: this.formBuilder.group({
        password1: '',
        password2: ''
      }),
      department: '',
      user_type: ''
    });
  }

}
