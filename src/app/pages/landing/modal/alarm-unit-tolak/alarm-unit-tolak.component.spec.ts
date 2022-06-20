import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlarmUnitTolakComponent } from './alarm-unit-tolak.component';

describe('AlarmUnitTolakComponent', () => {
  let component: AlarmUnitTolakComponent;
  let fixture: ComponentFixture<AlarmUnitTolakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmUnitTolakComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlarmUnitTolakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
