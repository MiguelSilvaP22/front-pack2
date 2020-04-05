import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAlumnosComponent } from './registrar-alumnos.component';

describe('RegistrarAlumnosComponent', () => {
  let component: RegistrarAlumnosComponent;
  let fixture: ComponentFixture<RegistrarAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
