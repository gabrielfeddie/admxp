import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSidebarHome } from './c-sidebar-home';

describe('CSidebarHome', () => {
  let component: CSidebarHome;
  let fixture: ComponentFixture<CSidebarHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSidebarHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSidebarHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
