import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/partials/product-list/product-list.component';
import { LoginComponent } from './components/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from "@angular/material/expansion";
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {
MatFormFieldModule
} from "@angular/material/form-field";
import { ProfileComponent } from './components/pages/profile/profile.component';
import { BottomNavComponent } from './components/partials/bottom-nav/bottom-nav.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { StocksComponent } from './components/pages/stocks/stocks.component';
import { TeamComponent } from './components/pages/team/team.component';
import { NewsComponent } from './components/pages/news/news.component';
import { NotificationComponent } from './components/pages/notification/notification.component';
import { BuySellComponent } from './components/pages/buy-sell/buy-sell.component';
import { ChartComponent } from './components/partials/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';

import { AppServiceService } from './services/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginComponent,
    ProfileComponent,
    BottomNavComponent,
    PortfolioComponent,
    StocksComponent,
    TeamComponent,
    NewsComponent,
    NotificationComponent,
    BuySellComponent,
    ChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
