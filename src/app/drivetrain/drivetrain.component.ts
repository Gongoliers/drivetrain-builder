import { Component, OnInit, Input } from "@angular/core";
import { DrivetrainModule } from "../models/DrivetrainModule";

@Component({
  selector: "app-drivetrain",
  templateUrl: "./drivetrain.component.html",
  styleUrls: ["./drivetrain.component.scss"],
})
export class DrivetrainComponent implements OnInit {
  @Input() module: DrivetrainModule;

  constructor() {}

  ngOnInit() {}
}
