import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
//import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const pagesRoutes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' }  },
      { path: 'grafica1', component: Graficas1Component, data: { titulo: 'Gráficas' }  },
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }  },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes del Tema' }  },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }