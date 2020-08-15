import { Component } from "@angular/core";
import { DrivetrainModule } from "./models/DrivetrainModule";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  selectedModule: DrivetrainModule;
}
