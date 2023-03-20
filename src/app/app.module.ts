import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CastsComponent } from './pages/casts/casts.component';
import { HomeComponent } from './pages/home/home.component';
import { TechnicalComponent } from './pages/technical/technical.component';
import { SliderComponent } from './components/slider/slider.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CastsComponent,
    HomeComponent,
    TechnicalComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
