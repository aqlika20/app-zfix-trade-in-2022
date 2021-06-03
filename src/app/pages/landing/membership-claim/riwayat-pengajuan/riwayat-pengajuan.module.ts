import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiwayatPengajuanPageRoutingModule } from './riwayat-pengajuan-routing.module';

import { RiwayatPengajuanPage } from './riwayat-pengajuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiwayatPengajuanPageRoutingModule
  ],
  declarations: [RiwayatPengajuanPage]
})
export class RiwayatPengajuanPageModule {}
