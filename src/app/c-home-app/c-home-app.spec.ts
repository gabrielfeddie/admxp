import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomeApp } from './c-home-app';

describe('CHomeApp', () => {
  let component: CHomeApp;
  let fixture: ComponentFixture<CHomeApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CHomeApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHomeApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
