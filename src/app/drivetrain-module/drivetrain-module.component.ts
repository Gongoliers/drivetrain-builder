import { Component, OnInit, Input } from "@angular/core";
import { DrivetrainModule } from "../models/DrivetrainModule";

@Component({
  selector: "app-drivetrain-module",
  templateUrl: "./drivetrain-module.component.html",
  styleUrls: ["./drivetrain-module.component.scss"],
})
export class DrivetrainModuleComponent implements OnInit {
  @Input() module: DrivetrainModule;

  constructor() {}

  ngOnInit() {}
}
