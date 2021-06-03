import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiwayatPengajuanPage } from './riwayat-pengajuan.page';

const routes: Routes = [
  {
    path: '',
    component: RiwayatPengajuanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiwayatPengajuanPageRoutingModule {}
