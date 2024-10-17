import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmenthomeComponent } from './departmenthome.component';

describe('DepartmenthomeComponent', () => {
  let component: DepartmenthomeComponent;
  let fixture: ComponentFixture<DepartmenthomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmenthomeComponent]
    });
    fixture = TestBed.createComponent(DepartmenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
