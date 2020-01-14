import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './services/guard/auth-guard.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'cart', component: CartComponent, canActivate:[AuthGuardService]},
  {path:'admin', component: AccountComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
