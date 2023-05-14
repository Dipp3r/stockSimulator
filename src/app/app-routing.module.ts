import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { NotificationComponent } from './components/pages/notification/notification.component';
import { NewsComponent } from './components/pages/news/news.component';
import { StocksComponent } from './components/pages/stocks/stocks.component';
import { BuySellComponent } from './components/pages/buy-sell/buy-sell.component';
import { TeamComponent } from './components/pages/team/team.component';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path: "login",component:LoginComponent},
  {path: "profile",component:ProfileComponent},
  {path: "portfolio",component:PortfolioComponent},
  {path: "notification",component:NotificationComponent},
  {path: "news",component:NewsComponent},
  {path: "stocks",component:StocksComponent},
  {path: "buysell",component:BuySellComponent},
  {path: "team",component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
