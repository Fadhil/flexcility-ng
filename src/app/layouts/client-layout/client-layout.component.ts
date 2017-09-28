import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {

    let body = document.getElementsByTagName('body')[0];

    body.classList.remove("sidebar-fixed"); //remove the class

    body.classList.add("sidebar-hidden"); //add the class
  }
}
