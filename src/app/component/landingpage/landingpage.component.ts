import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {


  ngOnInit() {
  }

  public isLoggedIn = false;

  constructor(private _router: Router, private authenticationService: AuthenticationService) {

    this.isLoggedIn = this.authenticationService.isLoggedIn();
    console.log('LoginComponent isLoggedIn -> ' + this.isLoggedIn);
    if (!this.isLoggedIn) {
      console.log("not logged in ...");
    } else {
      this._router.navigate(['/dashboard']);
    }
  }
  login() {
    console.log("login called ...");
    this.authenticationService.login_obtainAccessToken();
  }
}
