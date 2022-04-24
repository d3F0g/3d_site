import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotExpressiveComponent } from './robot-expressive.component';

describe('RobotExpressiveComponent', () => {
  let component: RobotExpressiveComponent;
  let fixture: ComponentFixture<RobotExpressiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotExpressiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotExpressiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
