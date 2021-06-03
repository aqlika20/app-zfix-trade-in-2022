import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceImagePage } from './device-image.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceImagePageRoutingModule {}
