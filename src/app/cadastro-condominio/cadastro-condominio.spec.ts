import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCondominio } from './cadastro-condominio';

describe('CadastroCondominio', () => {
  let component: CadastroCondominio;
  let fixture: ComponentFixture<CadastroCondominio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCondominio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCondominio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
