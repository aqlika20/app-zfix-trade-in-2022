import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsBrandModalComponent } from './ps-brand-modal.component';

describe('PsBrandModalComponent', () => {
  let component: PsBrandModalComponent;
  let fixture: ComponentFixture<PsBrandModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsBrandModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsBrandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
