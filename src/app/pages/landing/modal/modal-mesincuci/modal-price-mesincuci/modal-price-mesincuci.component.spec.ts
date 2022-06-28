import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalPriceMesincuciComponent } from './modal-price-mesincuci.component';

describe('ModalPriceMesincuciComponent', () => {
  let component: ModalPriceMesincuciComponent;
  let fixture: ComponentFixture<ModalPriceMesincuciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPriceMesincuciComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalPriceMesincuciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
