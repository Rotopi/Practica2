import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaUsuarioComponenteComponent } from './alta-usuario-componente.component';

describe('AltaUsuarioComponenteComponent', () => {
  let component: AltaUsuarioComponenteComponent;
  let fixture: ComponentFixture<AltaUsuarioComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaUsuarioComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaUsuarioComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
