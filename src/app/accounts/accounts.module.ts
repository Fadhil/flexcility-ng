import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { AccountsRoutingModule } from './accounts-routing.module';

@NgModule({
  imports: [
    AccountsRoutingModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountsModule { }
