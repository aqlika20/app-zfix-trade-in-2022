import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceImagePageRoutingModule } from './device-image-routing.module';

import { DeviceImagePage } from './device-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceImagePageRoutingModule
  ],
  declarations: [DeviceImagePage]
})
export class DeviceImagePageModule {}
