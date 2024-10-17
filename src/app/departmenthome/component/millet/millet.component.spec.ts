import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilletComponent } from './millet.component';

describe('MilletComponent', () => {
  let component: MilletComponent;
  let fixture: ComponentFixture<MilletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MilletComponent]
    });
    fixture = TestBed.createComponent(MilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
