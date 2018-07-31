import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingpageComponent } from './component/landingpage/landingpage.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LandingpageComponent,
    SideMenuComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    AppRoutingModule
  ],
  providers: [{ provide: OAuthStorage, useValue: localStorage },],
  bootstrap: [AppComponent]
})
export class AppModule { }
