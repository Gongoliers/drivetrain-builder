import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DrivetrainModuleService } from "../drivetrain-module.service";
import { DrivetrainModule } from "../models/DrivetrainModule";

@Component({
  selector: "app-module-list",
  templateUrl: "./module-list.component.html",
  styleUrls: ["./module-list.component.scss"],
})
export class ModuleListComponent implements OnInit {
  modules: DrivetrainModule[];
  selected: DrivetrainModule;
  @Output() selectedChanged = new EventEmitter<DrivetrainModule>();

  constructor(moduleService: DrivetrainModuleService) {
    this.modules = moduleService.modules;
  }

  ngOnInit() {}

  selectModule(module: DrivetrainModule) {
    this.selected = module;
    this.selectedChanged.emit(module);
  }

  clearSelection() {
    this.selected = null;
    this.selectedChanged.emit(null);
  }
}
