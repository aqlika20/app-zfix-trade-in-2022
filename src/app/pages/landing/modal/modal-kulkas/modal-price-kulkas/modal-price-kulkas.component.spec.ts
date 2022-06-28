import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPriceKulkasComponent } from './modal-price-kulkas.component';

describe('ModalPriceKulkasComponent', () => {
  let component: ModalPriceKulkasComponent;
  let fixture: ComponentFixture<ModalPriceKulkasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPriceKulkasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPriceKulkasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
