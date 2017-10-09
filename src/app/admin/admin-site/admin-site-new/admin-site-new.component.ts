import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Site } from '../../../models/site';

@Component({
  selector: 'app-admin-site-new',
  templateUrl: './admin-site-new.component.html',
  styleUrls: ['./admin-site-new.component.scss'],

})
export class AdminSiteNewComponent implements OnInit {
  siteForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
    this.siteForm = this.fb.group({
      name: ['', Validators.required ],
      address: '',
      description: ''
    });
  }

  onSubmit() { this.submitted = true; console.log("submitted:", this.submitted); }

  // get diagnostic() { return JSON.stringify(this.model); }
}
