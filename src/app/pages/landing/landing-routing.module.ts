import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'membership-activation',
    loadChildren: () => 
      import('./membership-activation/index/index.module').then( 
        (m) => m.IndexPageModule)
  },
  {
    path: "membership-activation/device-detail",
    loadChildren: () =>
      import("./membership-activation/device-detail/device-detail.module").then(
        (m) => m.DeviceDetailPageModule
      ),
  },
  {
    path: "membership-activation/device-detail/screen-testing",
    loadChildren: () =>
      import("./membership-activation/screen-testing/screen-testing.module").then(
        (m) => m.ScreenTestingPageModule
      ),
  },
  {
    path: 'membership-activation/device-detail/screen-testing/device-image',
    loadChildren: () => 
    import('./membership-activation/device-image/device-image.module').then( 
      (m) => m.DeviceImagePageModule
    ),
  },
  {
    path: 'membership-claim/index',
    loadChildren: () => 
      import('./membership-claim/index/index.module').then( 
        (m) => m.IndexPageModule)
  },
  {
    path: 'membership-claim',
    loadChildren: () => 
      import('./membership-claim/overview/overview.module').then( 
        (m) => m.OverviewPageModule)
  },
  {
    path: 'membership-claim/done',
    loadChildren: () => 
      import('./membership-claim/done/done.module').then( 
        (m) => m.DonePageModule)
  },
  {
    path: 'membership-claim/riwayat-pengajuan',
    loadChildren: () => import('./membership-claim/riwayat-pengajuan/riwayat-pengajuan.module').then( m => m.RiwayatPengajuanPageModule)
  },
  {
    path: 'my-card',
    loadChildren: () => 
    import('./setting/my-card/my-card.module').then( 
      (m) => m.MyCardPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => 
      import('./setting/faq/faq.module').then( 
        (m) => m.FaqPageModule)
  },
  {
    path: 'outlet',
    loadChildren: () => 
    import('./setting/outlet/outlet.module').then( 
      (m) => m.OutletPageModule)
  },
  {
    path: 'call-us',
    loadChildren: () => 
    import('./setting/call-us/call-us.module').then( 
      (m) => m.CallUsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => 
    import('./setting/privacy-policy/privacy-policy.module').then( 
      (m) => m.PrivacyPolicyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => 
    import('./setting/terms/terms.module').then( 
      (m) => m.TermsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => 
    import('./setting/edit-profile/edit-profile.module').then( 
      (m) => m.EditProfilePageModule)
  },
  {
    path: 'privacy-register',
    loadChildren: () => import('./setting/privacy-register/privacy-register.module').then( 
      (m) => m.PrivacyRegisterPageModule)
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
