import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiwayatPengajuanPage } from './riwayat-pengajuan.page';

describe('RiwayatPengajuanPage', () => {
  let component: RiwayatPengajuanPage;
  let fixture: ComponentFixture<RiwayatPengajuanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiwayatPengajuanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiwayatPengajuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
