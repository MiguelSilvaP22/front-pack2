import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeCargaComponent } from './mensaje-carga.component';

describe('MensajeCargaComponent', () => {
  let component: MensajeCargaComponent;
  let fixture: ComponentFixture<MensajeCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensajeCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
