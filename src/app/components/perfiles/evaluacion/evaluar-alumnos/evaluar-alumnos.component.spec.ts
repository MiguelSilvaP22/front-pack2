import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluarAlumnosComponent } from './evaluar-alumnos.component';

describe('EvaluarAlumnosComponent', () => {
  let component: EvaluarAlumnosComponent;
  let fixture: ComponentFixture<EvaluarAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluarAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
