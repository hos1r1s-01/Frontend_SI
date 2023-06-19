import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroLoginComponent } from './primeiro-login.component';

describe('PrimeiroLoginComponent', () => {
  let component: PrimeiroLoginComponent;
  let fixture: ComponentFixture<PrimeiroLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeiroLoginComponent]
    });
    fixture = TestBed.createComponent(PrimeiroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
