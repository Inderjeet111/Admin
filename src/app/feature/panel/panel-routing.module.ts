import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelMainComponent } from './components/panel-main/panel-main.component';

const routes: Routes = [
  {
    path: "",
    component: PanelMainComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/manage-users/manage-users.module').then(
            (m) => m.ManageUsersModule
          ),
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
