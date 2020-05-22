import { NgModule } from '@angular/core';
import { LoginGuardService } from '../Services/RouterGuards/login-guard.service';
import { SaveDataGuardService } from '../Services/RouterGuards/saveData-guard.service';

@NgModule({
  providers: [LoginGuardService, SaveDataGuardService]
})
export class ServiceModule {}
