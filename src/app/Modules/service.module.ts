import { NgModule } from '@angular/core';
import { LoginGuardService } from '../Services/login-guard.service';
import { SaveDataGuardService } from '../Services/saveData-guard.service';

@NgModule({
  providers: [LoginGuardService, SaveDataGuardService]
})
export class ServiceModule {}
