import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import {DemoMaterialModule} from './material-module';
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'hammerjs';
import 'web-animations-js';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    RouterModule.forRoot([
      { path: '', component: CampaignListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CampaignListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

