import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.css"]
})
export class SpinnerComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit() {
    this.show = true;
    setTimeout(() => (this.show = false), 1000);
  }
}
