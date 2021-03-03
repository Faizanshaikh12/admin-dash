import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ButtonsComponent} from './buttons/buttons.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardsComponent} from './cards/cards.component';
import {ColorsComponent} from './colors/colors.component';
import {BordersComponent} from './borders/borders.component';
import {AnimationsComponent} from './animations/animations.component';
import {OthersComponent} from './others/others.component';
import {TablesComponent} from './tables/tables.component';
import {ChartsComponent} from './charts/charts.component';

const routes: Routes = [

  { path: '', component: DashboardComponent},
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'others', component: OthersComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'tables', component: TablesComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],

  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
