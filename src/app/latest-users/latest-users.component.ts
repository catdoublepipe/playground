import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs/internal/observable/timer";
import { UserService } from "./user.service";
import { switchMap, tap } from "rxjs/operators";
import { Observable, merge, Subject } from "rxjs";

@Component({
  selector: "app-latest-users",
  templateUrl: "./latest-users.component.html",
  styleUrls: ["./latest-users.component.css"]
})
export class LatestUsersComponent implements OnInit {
  
  requestLoad$ = new Subject<any>();
  loadComplete$ = new Subject<any>();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  users$ = this.updateUsersTrigger$().pipe(
    switchMap(() => this.userService.getUsers$()),
    tap(this.loadComplete$)
  );

  private updateUsersTrigger$() {
    return merge(timer(0, 10000), this.requestLoad$);
  }
}
