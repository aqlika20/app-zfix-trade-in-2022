import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFormKulkasComponent } from './modal-form-kulkas.component';

describe('ModalFormKulkasComponent', () => {
  let component: ModalFormKulkasComponent;
  let fixture: ComponentFixture<ModalFormKulkasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFormKulkasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFormKulkasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
