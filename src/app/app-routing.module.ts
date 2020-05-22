import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component'
import { LoginGuardService } from './Services/login-guard.service';
import { SaveDataGuardService } from './Services/saveData-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product',
    component: ProductsComponent,
    canActivate: [LoginGuardService],
    canDeactivate: [SaveDataGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
