import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPrimeiroLoginComponent } from './box-primeiro-login.component';

describe('BoxPrimeiroLoginComponent', () => {
  let component: BoxPrimeiroLoginComponent;
  let fixture: ComponentFixture<BoxPrimeiroLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxPrimeiroLoginComponent]
    });
    fixture = TestBed.createComponent(BoxPrimeiroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
