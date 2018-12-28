import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerModule } from './container/container.module';
import { StorageService } from './shared/services/storage.service';
import { ActionsService } from './shared/services/actions.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContainerModule,
    FormsModule
  ],
  providers: [
    StorageService,
    ActionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
