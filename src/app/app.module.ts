import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CastsComponent } from './pages/casts/casts.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { TechnicalComponent } from './pages/technical/technical.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CastsComponent,
    CharactersComponent,
    TechnicalComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
