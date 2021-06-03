import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceImagePage } from './device-image.page';

describe('DeviceImagePage', () => {
  let component: DeviceImagePage;
  let fixture: ComponentFixture<DeviceImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
