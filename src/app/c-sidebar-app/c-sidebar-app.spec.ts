import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSidebarApp } from './c-sidebar-app';

describe('CSidebarApp', () => {
  let component: CSidebarApp;
  let fixture: ComponentFixture<CSidebarApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSidebarApp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSidebarApp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
