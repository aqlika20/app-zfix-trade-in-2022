import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyaratKetentuanComponent } from './syarat-ketentuan.component';

describe('SyaratKetentuanComponent', () => {
  let component: SyaratKetentuanComponent;
  let fixture: ComponentFixture<SyaratKetentuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyaratKetentuanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyaratKetentuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
