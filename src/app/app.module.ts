import { UserService } from './latest-users/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LatestUsersComponent } from './latest-users/latest-users.component';
import { LandingComponent } from './landing/landing.component';
import { LinearComponent } from './linear/linear.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    LatestUsersComponent,
    LandingComponent,
    LinearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
