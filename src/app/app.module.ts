import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
    TablesComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
