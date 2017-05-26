import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helpdesk-layout',
  templateUrl: './helpdesk-layout.component.html',
  styleUrls: ['./helpdesk-layout.component.scss']
})
export class HelpdeskLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let body = document.getElementsByTagName('body')[0];

    body.classList.remove("sidebar-fixed"); //remove the class

    body.classList.add("sidebar-hidden"); //add the class
  }

}
