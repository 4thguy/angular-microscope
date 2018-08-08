import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSceneButtonComponent } from './card-scene-button.component';

describe('CardSceneButtonComponent', () => {
  let component: CardSceneButtonComponent;
  let fixture: ComponentFixture<CardSceneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSceneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSceneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
