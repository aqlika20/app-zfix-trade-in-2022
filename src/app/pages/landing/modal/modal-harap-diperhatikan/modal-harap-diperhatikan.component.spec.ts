import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalHarapDiperhatikanComponent } from './modal-harap-diperhatikan.component';

describe('ModalHarapDiperhatikanComponent', () => {
  let component: ModalHarapDiperhatikanComponent;
  let fixture: ComponentFixture<ModalHarapDiperhatikanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHarapDiperhatikanComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalHarapDiperhatikanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
