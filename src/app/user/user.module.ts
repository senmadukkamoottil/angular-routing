import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'logout', component: WelcomeComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
