import { LandingComponent } from "./landing/landing.component";
import { LatestUsersComponent } from "./latest-users/latest-users.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LinearComponent } from './linear/linear.component';

const routes: Routes = [
  {
    path: "linear",
    component: LinearComponent
  },
  {
    path: "",
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
