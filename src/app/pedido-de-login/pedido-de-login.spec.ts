import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDeLogin } from './pedido-de-login';

describe('PedidoDeLogin', () => {
  let component: PedidoDeLogin;
  let fixture: ComponentFixture<PedidoDeLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoDeLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoDeLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
