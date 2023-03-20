
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CastsComponent } from './pages/casts/casts.component';
import { HomeComponent } from './pages/home/home.component';
import { TechnicalComponent } from './pages/technical/technical.component';
import { SliderComponent } from './components/slider/slider.component';


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
    HttpClientModule,
    AppRouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
