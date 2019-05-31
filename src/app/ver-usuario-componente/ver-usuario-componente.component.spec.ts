import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerUsuarioComponenteComponent } from './ver-usuario-componente.component';

describe('VerUsuarioComponenteComponent', () => {
  let component: VerUsuarioComponenteComponent;
  let fixture: ComponentFixture<VerUsuarioComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerUsuarioComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerUsuarioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
