import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PopupbioComponent } from './header/popupbio/popupbio.component';
import { FooterComponent } from './footer/footer.component';
import { AllArtOnExhibitComponent } from './all-art-on-exhibit/all-art-on-exhibit.component';
import { ArtByCultureComponent } from './art-by-culture/art-by-culture.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopupbioComponent,
    FooterComponent,
    AllArtOnExhibitComponent,
    ArtByCultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
