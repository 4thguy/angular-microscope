import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventButtonComponent } from './card-event-button.component';

describe('CardEventButtonComponent', () => {
  let component: CardEventButtonComponent;
  let fixture: ComponentFixture<CardEventButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEventButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEventButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
