import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionalComponent } from './devotional.component';

describe('DevotionalComponent', () => {
  let component: DevotionalComponent;
  let fixture: ComponentFixture<DevotionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevotionalComponent]
    });
    fixture = TestBed.createComponent(DevotionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
