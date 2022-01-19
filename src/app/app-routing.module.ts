import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { MessageComponent } from './messages/message.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuardGuard } from './user/auth-guard.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuardGuard]
      },
      {
        path: 'products',
        canActivate: [AuthGuardGuard],
        loadChildren: () =>
          import('../app/products/product.module').then(m=> m.ProductModule)
      },
      {path: 'message', component: MessageComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
