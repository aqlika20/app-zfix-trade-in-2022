import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyPlansPage } from './my-plans.page';

import { MyPlansPageRoutingModule } from './my-plans-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MyPlansPageRoutingModule
  ],
  declarations: [MyPlansPage]
})
export class MyPlansPageModule {}
