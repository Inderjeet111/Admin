import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/panel/components/home/home.component';
import { LoginComponent } from './feature/auth/components/login/login.component';
import { AuthAdminGuard } from './feature/auth/auth-admin.guard';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: ()=> import('./feature/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: 'panel',
    loadChildren: ()=> import('./feature/panel/panel.module').then(m=> m.PanelModule),
    canActivate: [AuthAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
