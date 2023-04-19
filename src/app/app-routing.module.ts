import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/panel/components/home/home.component';
import { LoginComponent } from './feature/auth/components/admin/login/login.component';
import { AuthAdminGuard } from './feature/auth/components/admin/auth-admin.guard';
import { LoginAuthGuard } from './feature/auth/components/admin/login-auth.guard';
import { AuthUserGuard } from './feature/auth/components/user/auth-user.guard';
import { AuthUserLoginGuard } from './feature/auth/components/user/auth-user-login.guard';

const routes: Routes = [
  
  {
    path: '',
    canActivate:[LoginAuthGuard,AuthUserLoginGuard],
    loadChildren: ()=> import('./feature/auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path: 'panel',
    canActivate:[AuthAdminGuard],
    loadChildren: ()=> import('./feature/panel/panel.module').then(m=> m.PanelModule),
    
  },
  {
    path: 'chat',
    loadChildren: ()=> import('./feature/chat/chat.module').then(m=> m.ChatModule),
    canActivate:[AuthUserGuard]
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
