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

  nameChangeLog: string[] = [];
  constructor(private fb: FormBuilder) { 
    this.createForm();
    this.logNameChange();
  }

  // myFile:File; /* property of File type */
  // fileChange(files: any){
  //     console.log(files);
  //     this.myFile = files[0];
  // }

  onSubmit() { this.submitted = true; console.log("submitted:", this.submitted); }
  
  onUploadFinished(f: any) {
    console.log("uploading file:", f);
  }

  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }
  ngOnInit() {

  }

  createForm(){
    console.log("Creating form");
    this.siteForm = this.fb.group({
      name: ['', Validators.required ],
      address: '',
      description: ''
    });
  }

  logNameChange() {
    const nameControl = this.siteForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => this.nameChangeLog.push(value)
    );
  }


  // get diagnostic() { return JSON.stringify(this.model); }
}
