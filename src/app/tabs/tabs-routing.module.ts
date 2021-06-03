import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'landing',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/landing/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'my-plans',
        loadChildren: () => import('../pages/landing/my-plans/my-plans.module').then(m => m.MyPlansPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('../pages/landing/setting/index/index.module').then( m => m.IndexPageModule)
      },
      {
        path: '',
        redirectTo: '/landing/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/landing/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
