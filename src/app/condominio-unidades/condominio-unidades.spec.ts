import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioUnidades } from './condominio-unidades';

describe('CondominioUnidades', () => {
  let component: CondominioUnidades;
  let fixture: ComponentFixture<CondominioUnidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondominioUnidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondominioUnidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
