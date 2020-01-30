import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRaterComponent } from './day-rater.component';

describe('DayRaterComponent', () => {
  let component: DayRaterComponent;
  let fixture: ComponentFixture<DayRaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayRaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
