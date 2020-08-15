import { Component, OnInit, Input } from "@angular/core";
import { DrivetrainModule } from "../models/DrivetrainModule";

@Component({
  selector: "app-drivetrain-module-details",
  templateUrl: "./drivetrain-module-details.component.html",
  styleUrls: ["./drivetrain-module-details.component.scss"],
})
export class DrivetrainModuleDetailsComponent implements OnInit {
  @Input() module: DrivetrainModule;

  constructor() {}

  ngOnInit() {}

  get parameterNames(): string[] {
    if (!this.module) {
      return [];
    }

    return this.module.parameters.map((it) => it.name);
  }
}
