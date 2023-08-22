import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import{UserAuthGuard} from './userauthguard.guard';

const routes: Routes = [
  { path: 'user', canActivate: [UserAuthGuard], loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: '', loadChildren: () => HomeModule }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
