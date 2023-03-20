import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CastsComponent } from './pages/casts/casts.component';
import { TechnicalComponent } from './pages/technical/technical.component';

const routes: Routes = [
{path: '', component: HomeComponent, pathMatch: 'full'},
{path: 'cast', component: CastsComponent},
{path: 'tech',  component: TechnicalComponent},
{path: '**',  redirectTo: ""}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRouterModule { }
