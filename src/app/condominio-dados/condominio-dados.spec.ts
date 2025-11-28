import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioDados } from './condominio-dados';

describe('CondominioDados', () => {
  let component: CondominioDados;
  let fixture: ComponentFixture<CondominioDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondominioDados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondominioDados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
