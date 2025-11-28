import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominioDashboard } from './condominio-dashboard';

describe('CondominioDashboard', () => {
  let component: CondominioDashboard;
  let fixture: ComponentFixture<CondominioDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CondominioDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondominioDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
