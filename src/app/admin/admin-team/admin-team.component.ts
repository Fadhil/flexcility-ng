import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-team',
  // templateUrl: './admin-team.component.html',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./admin-team.component.scss']
})
export class AdminTeamComponent implements OnInit {

    // dropdownList = [];
    // selectedItems = [];
    // dropdownSettings = {};

  constructor() { }

  ngOnInit() 
  {

        // this.dropdownList = [
        //                       {"id":1,"itemName":"India"},
        //                       {"id":2,"itemName":"Singapore"},
        //                       {"id":3,"itemName":"Australia"},
        //                       {"id":4,"itemName":"Canada"},
        //                       {"id":5,"itemName":"South Korea"},
        //                       {"id":6,"itemName":"Germany"},
        //                       {"id":7,"itemName":"France"},
        //                       {"id":8,"itemName":"Russia"},
        //                       {"id":9,"itemName":"Italy"},
        //                       {"id":10,"itemName":"Sweden"}
        //                     ];
        // this.selectedItems = [
        //                         {"id":2,"itemName":"Singapore"},
        //                         {"id":3,"itemName":"Australia"},
        //                         {"id":4,"itemName":"Canada"},
        //                         {"id":5,"itemName":"South Korea"}
        //                     ];
        // this.dropdownSettings = { 
        //                           singleSelection: false, 
        //                           text:"Select Countries",
        //                           selectAllText:'Select All',
        //                           unSelectAllText:'UnSelect All',
        //                           enableSearchFilter: true
        //                         };  
   }
    // onItemSelect(item){
    //     console.log('Selected Item:');
    //     console.log(item);
    // }
    // OnItemDeSelect(item){
    //     console.log('De-Selected Item:');
    //     console.log(item);
    // }
}
