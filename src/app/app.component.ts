import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { initializeApp, database } from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from './../environments/firebase.config';


@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, db: AngularFireDatabase) {
    const user$: FirebaseListObservable<any> = db.list('userdata');
    const usr$ = db.object('userdata/2');
    usr$.subscribe(console.log);
  }


  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      var scrollToTop = window.setInterval(function () {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 16); // how fast to scroll (this equals roughly 60 fps)
    });
  }

}

