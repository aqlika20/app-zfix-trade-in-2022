import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormMesincuciComponent } from './modal-form-mesincuci.component';

describe('ModalFormMesincuciComponent', () => {
  let component: ModalFormMesincuciComponent;
  let fixture: ComponentFixture<ModalFormMesincuciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormMesincuciComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormMesincuciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
