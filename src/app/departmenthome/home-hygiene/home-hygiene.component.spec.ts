import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHygieneComponent } from './home-hygiene.component';

describe('HomeHygieneComponent', () => {
  let component: HomeHygieneComponent;
  let fixture: ComponentFixture<HomeHygieneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHygieneComponent]
    });
    fixture = TestBed.createComponent(HomeHygieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
