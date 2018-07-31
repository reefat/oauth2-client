import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private _router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    console.log('logout pressed');
    this.authenticationService.logout();
    this._router.navigate(['/login']).then((success) => {
      console.log('sucss-----------');
    }).catch(error => console.dir(error));
  }
}
