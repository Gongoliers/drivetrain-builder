import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { DrivetrainModuleComponent } from './drivetrain-module/drivetrain-module.component';
import { DrivetrainModuleDetailsComponent } from './drivetrain-module-details/drivetrain-module-details.component';
import { JavaClassGeneratorPipe } from './java-class-generator.pipe';
import { DrivetrainComponent } from './drivetrain/drivetrain.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    DrivetrainModuleComponent,
    DrivetrainModuleDetailsComponent,
    JavaClassGeneratorPipe,
    DrivetrainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
