import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeriodComponent } from './card-period.component';

describe('CardPeriodComponent', () => {
  let component: CardPeriodComponent;
  let fixture: ComponentFixture<CardPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
