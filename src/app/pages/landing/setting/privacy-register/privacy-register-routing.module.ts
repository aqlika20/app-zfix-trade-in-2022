import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyRegisterPage } from './privacy-register.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyRegisterPageRoutingModule {}
