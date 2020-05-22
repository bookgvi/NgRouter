import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component'
import { LoginGuardService } from './Services/RouterGuards/login-guard.service';
import { SaveDataGuardService } from './Services/RouterGuards/saveData-guard.service';
import { ChatComponent } from './Components/chat/chat.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'product',
    component: ProductsComponent,
    canActivate: [LoginGuardService],
    canDeactivate: [SaveDataGuardService]
  },
  { path: 'chat', component: ChatComponent, outlet: 'aux' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
