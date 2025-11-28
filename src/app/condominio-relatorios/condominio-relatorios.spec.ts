import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioRelatorios } from './condominio-relatorios';

describe('CondominioRelatorios', () => {
  let component: CondominioRelatorios;
  let fixture: ComponentFixture<CondominioRelatorios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondominioRelatorios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondominioRelatorios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
