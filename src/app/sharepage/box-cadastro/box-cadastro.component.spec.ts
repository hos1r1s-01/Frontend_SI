import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCadastroComponent } from './box-cadastro.component';

describe('BoxCadastroComponent', () => {
  let component: BoxCadastroComponent;
  let fixture: ComponentFixture<BoxCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxCadastroComponent]
    });
    fixture = TestBed.createComponent(BoxCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
