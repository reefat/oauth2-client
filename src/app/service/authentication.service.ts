import { Injectable, OnInit } from '@angular/core';
import { OAuthService, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { authConfig } from '../shared/constants/authentication';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  public userLoggedIn = false;

  constructor(private _router: Router, private oauthService: OAuthService, private http_new: HttpClient) {
    console.log('AuthenticationService constructor called ..');
    this.oauthService.requireHttps = false;
    this.oauthService.showDebugInformation = true;
    console.log('this.oauthService.requireHttps -> ' + this.oauthService.requireHttps);
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.requireHttps = false;
    this.callInit();
  }

  ngOnInit() {
    this.userLoggedIn = !(this.oauthService.getAccessToken() === null);
  }

  callInit() {
    this.oauthService.tryLogin({}).then(() => {
      console.log('--- await completed ---');
      if (!this.oauthService.getAccessToken()) { this.oauthService.initImplicitFlow(); }
      console.log('hasValidAccessToken -> ' + this.oauthService.hasValidAccessToken());
      console.log('hasValidIdToken -> ' + this.oauthService.hasValidIdToken());
      if (!this.oauthService.hasValidAccessToken()) {
        console.log('###');
        console.dir(this.oauthService);
      } else {
        this.userLoggedIn = true;
        this._router.navigate(['/dashboard']);
      }
    });
    console.log('--- outside ---');
  }

  getAccessToken() {
    return this.oauthService.getAccessToken();
  }
  isLoggedIn() {
    console.log('isLoggedIn --> ' + this.oauthService.getAccessToken());
    console.log('hasValidAccessToken --> ' + this.oauthService.hasValidAccessToken());
    return this.userLoggedIn;
  }
  hasValidAccessToken() {
    return this.oauthService.hasValidAccessToken();
  }
  login_obtainAccessToken() {
    this.oauthService.initImplicitFlow();
    // this.userLoggedIn = !(this.oauthService.getAccessToken() === null);
  }

  logout() {
    let revokeUrl = 'http://localhost:8081/auth/oauth/token/revokeById/' + this.oauthService.getAccessToken();
    let accessToken_ = this.oauthService.getAccessToken();
    console.log('accessToken_ -> ' + accessToken_);
    this.oauthService.logOut();
    this.userLoggedIn = false;
    console.log('logout done -> ');
  }
}
